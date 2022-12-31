import React from 'react';
import OrdersBoard from '../OrdersBoard';
import { Container } from './styles';

export default function Orders() {
    return (
        <Container>
            <OrdersBoard />
            <OrdersBoard />
            <OrdersBoard />
        </Container>
    );
}
