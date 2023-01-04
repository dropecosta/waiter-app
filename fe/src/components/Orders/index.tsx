import React from 'react';
import OrdersBoard from '../OrdersBoard';
import { Container } from './styles';
import { Order } from '../../types/Order';

const orders: Order[] = [
    {
        '_id': '63ad9860022f2191b54f7850',
        'table': '123',
        'status': 'IN_PRODUCTION',
        'products': [
            {
                'product': {
                    'name': 'Pizza quatro queijos',
                    'imagePath': '1672311710811-quatro-queijos.png',
                    'price': 40,
                },
                'quantity': 3,
                '_id': '63ad9860022f2191b54f7851'
            },
            {
                'product': {
                    'name': 'Coca-cola',
                    'imagePath': '1672313405178-coca-cola.png',
                    'price': 7,
                },
                'quantity': 3,
                '_id': '63ad9860022f2191b54f7852'
            }
        ],
    }
];

export default function Orders() {
    return (
        <Container>
            <OrdersBoard
                icon="🕒"
                title="Fila de espera"
                orders={orders}
            />
            <OrdersBoard
                icon="👩‍🍳"
                title="Fila de espera"
                orders={orders}
            />
            <OrdersBoard
                icon="✅"
                title="Fila de espera"
                orders={orders}
            />
        </Container>
    );
}
