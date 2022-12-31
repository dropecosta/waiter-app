import React from 'react';
import { Board, OrdersContainer } from './styles';

export default function OrdersBoard() {
    return (
        <Board>
            <header>
                <span>⏱️</span>
                <strong>Fila de espera</strong>
                <span>(1)</span>
            </header>

            <OrdersContainer>
                <button type='button'>
                    <strong>Mesa 2</strong>
                    <span>2 itens</span>
                </button>
            </OrdersContainer>
        </Board>
    );
}
