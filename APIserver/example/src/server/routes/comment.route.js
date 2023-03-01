import express from 'express';
import commentCtrl from '../controllers/comment.controlloer';

const router = express.Router();


router.get('/', (req, res) => {
    res.send(`此路徑是: localhost:3000/api/comment`);
  });

router.route('/getComment/:newsid').get(commentCtrl.getComment);

router.route('/postComment').post(commentCtrl.postComment);

router.route('/likeComment').post(commentCtrl.likeComment);

export default router;