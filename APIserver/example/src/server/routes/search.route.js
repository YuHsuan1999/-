/* eslint-disable max-len */
import express from 'express';
import SearchCtrl from '../controllers/search.controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`此路徑是: localhost:3000/api/search`);
});

router.route('/searchByClass/:class').get(SearchCtrl.getNewsByClass);

router.route('/searchByKeyword/:keyword').get(SearchCtrl.getNewsByKeyword);

/* 可以新增其他查詢方式 */

export default router;
