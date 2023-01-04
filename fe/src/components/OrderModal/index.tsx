import React from 'react';
import { ModalBody, Overlay } from './styles';

interface OrderModalProps {
    visible: boolean;
}

export default function OrderModal({ visible }: OrderModalProps) {
    if (!visible) {
        return null;
    }

    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa 2</strong>

                    <button type='button'></button>
                </header>
            </ModalBody>
            <div>OrderModal</div>
        </Overlay>
    );
}
