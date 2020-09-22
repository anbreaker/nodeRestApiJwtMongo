'use strict';
import {Router} from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller';
import {verifySignUp} from '../middlewares/importMiddlewares';
import a from '../middlewares/verifySignUp';

//Routes
router.post(
  '/signUp',
  [verifySignUp.checkDuplicatedUserNameOrEmail, verifySignUp.checkRolesExisted],
  authCtrl.signUp
);

router.post('/signIn', authCtrl.signIn);

export default router;
