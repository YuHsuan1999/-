import express from 'express';
import PopularCtrl from '../controllers/popular.controller';

const router = express.Router();

router.route('/getPopularNews').get(PopularCtrl.getPopularNewsInfo);

export default router;