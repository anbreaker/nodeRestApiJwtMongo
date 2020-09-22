'use strict';
import {Router} from 'express';
const router = Router();

import * as userCtrl from '../controllers/user.controller';
import {authJwt, verifySignUp} from '../middlewares/importMiddlewares';

router.post(
  '/',
  authJwt.verifyToken,
  authJwt.isAdmin,
  verifySignUp.checkRolesExisted,
  userCtrl.creatUser
);

export default router;
