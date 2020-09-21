'use strict';

import {Router} from 'express';
const router = Router();

import * as productsCtrl from '../controllers/products.controller';
import {verifyToken} from '../middlewares/authJwt';

// Routes
router.post('/', verifyToken, productsCtrl.createProduct);

router.get('/', productsCtrl.getProducts);

router.get('/:productId', productsCtrl.getProductsById);

router.put('/:productId', productsCtrl.updateProductById);

router.delete('/:productId', productsCtrl.deleteProductsById);

export default router;
