import express from 'express';
import userCtrl from '../controllers/user.controller';

const router = express.Router();

router.route('/').post(userCtrl.userGet);
router.route('/login').post(userCtrl.userLogin);

router.route('/updateUser').put(userCtrl.userModify);

router.route('/createUser').post(userCtrl.userRegist);

export default router;