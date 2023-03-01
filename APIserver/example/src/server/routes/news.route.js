/* eslint-disable max-len */
import express from 'express';
import NewsDetailCtrl from '../controllers/newsDetail.controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`此路徑是: localhost:3000/api/news`);
});

router.route('/getNewsDetail/:newsId').get(NewsDetailCtrl.getNewsDetail);   //個別新聞

export default router;
