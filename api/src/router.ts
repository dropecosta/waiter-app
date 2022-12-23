import { Router } from 'express';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategories } from './app/useCases/categories/createCategories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create categories
router.post('/categories', createCategories);

// List products
router.get('/products', (req, res) => {
    res.send('ok');
});

// Create products
router.post('/products', (req, res) => {
    res.send('ok');
});

// Get products by category
router.get('/categories/:productId/products', (req, res) => {
    res.send('ok');
});

// List orders
router.get('/orders', (req, res) => {
    res.send('ok');
});

// Create order
router.post('/orders', (req, res) => {
    res.send('ok');
});

// change order status
router.patch('/orders/:orderId', (req, res) => {
    res.send('ok');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
    res.send('ok');
});
