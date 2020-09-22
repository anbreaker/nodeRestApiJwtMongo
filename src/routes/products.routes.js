'use strict';

import {Router} from 'express';
const router = Router();

import * as productsCtrl from '../controllers/products.controller';
import {authJwt} from '../middlewares/importMiddlewares';

// Routes
router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.createProduct);

router.get('/', productsCtrl.getProducts);

router.get('/:productId', productsCtrl.getProductsById);

router.put(
  '/:productId',
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.updateProductById
);

router.delete(
  '/:productId',
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.deleteProductsById
);

export default router;
