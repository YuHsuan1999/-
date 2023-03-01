/* eslint-disable max-len */
import express from 'express';
import TestCtrl from '../controllers/test.controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`此路徑是: localhost:3000/api/test`);
});

router.route('/get').get(TestCtrl.get);

export default router;
