import testModule from '../modules/test.module'

export const get = (req, res, next) => {
    testModule.find().then((result) =>{
        res.send(result);
    }).catch((err) =>{
        next(err);
    });
};

export default{
    get
}