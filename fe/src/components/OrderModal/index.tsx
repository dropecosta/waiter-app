import React from 'react';
import { Actions, ModalBody, OrderDetails, Overlay } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { formatCurrency } from '../../utils/formatCurrency';
import { Order } from '../../types/Order';

interface OrderModalProps {
    visible: boolean;
    order: Order | null;
    onClose: () => void;
}

export default function OrderModal({
    visible,
    order,
    onClose,
}: OrderModalProps) {
    if (!visible || !order) {
        return null;
    }

    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa {order.table}</strong>

                    <button type="button" onClick={onClose}>
                        <img src={closeIcon} alt="icone-fechar" />
                    </button>
                </header>
                <div className="status-container">
                    <small>Status do pedido</small>
                    <div>
                        <span>
                            {order.status === 'WAITING' && '🕒'}
                            {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
                            {order.status === 'DONE' && '✅'}
                        </span>
                        <strong>
                            {order.status === 'WAITING' && 'Fila de espera'}
                            {order.status === 'IN_PRODUCTION' && 'Em produção'}
                            {order.status === 'DONE' && 'Pronto'}
                        </strong>
                    </div>
                </div>

                <OrderDetails>
                    <strong>Itens</strong>

                    <div className='order-items'>
                        {order.products.map(({ _id, product, quantity }) => (
                            <div className="item" key={_id}>
                                <img
                                    width="56"
                                    height="28.51"
                                    src={`http://localhost:3002/uploads/${product.imagePath}`}
                                    alt={product.name}
                                />
                                <span className="quantity">{quantity}x</span>

                                <div className="product-details">
                                    <strong>{product.name}</strong>
                                    <span>{formatCurrency(product.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </OrderDetails>

                <Actions>
                    {order.status !== 'DONE' && (
                        <button
                            type="button"
                            className="primary"
                            // disabled={isLoading}
                            // onClick={onChangeOrderStatus}
                        >
                            <span>
                                {order.status === 'WAITING' && '👩‍🍳'}
                                {order.status === 'IN_PRODUCTION' && '✅'}
                            </span>
                            <span>
                                {order.status === 'WAITING' && 'Iniciar Produção'}
                                {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
                            </span>
                        </button>
                    )}

                    <button
                        type="button"
                        className="secondary"
                        // onClick={onCancelOrder}
                        // disabled={isLoading}
                    >
            Cancelar pedido
                    </button>
                </Actions>
            </ModalBody>
        </Overlay>
    );
}
