import express from 'express';
import keywordCtrl from '../controllers/keyword.controller';

const router = express.Router();


router.get('/', (req, res) => {
    res.send(`此路徑是: localhost:3000/api/keyword`);
  });

router.route('/postkeyword').post(keywordCtrl.postKeyword);

export default router;