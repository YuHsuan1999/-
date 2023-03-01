import express from 'express';
import hospitalCtrl from '../controllers/hospital.controller';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`此路徑是: localhost:3000/api/hospital`);
  });

router.route('/getName/:name').get(hospitalCtrl.getHospitalInfoByName);

router.route('/getArea/:area').get(hospitalCtrl.getHospitalInfoByArea);

router.route('/getDivision/:division').get(hospitalCtrl.getHospitalDivision);

export default router;