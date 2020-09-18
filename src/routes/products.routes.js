'use strict';

import {Router} from 'express';
const router = Router();

import * as productsCtrl from '../controllers/products.controller';

// Routes
router.post('/', productsCtrl.createProduct);

router.get('/', productsCtrl.getProducts);

router.get('/:productId', productsCtrl.getProductsById);

router.put('/:productId', productsCtrl.updateProductById);

router.get('/:productId', productsCtrl.deleteeProductsById);

export default router;
