/* eslint-disable max-len */
import express from 'express';
import ProcessCtrl from '../controllers/process.controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`此路徑是: localhost:3000/api/process`);
});

router.route('/getNews/:day').get(ProcessCtrl.getAllNews);

router.route('/postSummary').post(ProcessCtrl.postSummary);

router.route('/postReliability').post(ProcessCtrl.postReliability);

router.route('/postPopularity').post(ProcessCtrl.postPopularity);

/* 可以新增其他查詢方式 */

export default router;
