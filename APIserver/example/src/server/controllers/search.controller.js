import searchModule from '../modules/search.module';

export const getNewsByClass = (req, res, next) => {
    const classification = req.params.class;
    searchModule.findNewsByClass (classification).then((result) =>{
        res.send(result);
    }).catch((err) => {
        next(err);
    });
};

export const getNewsByKeyword = (req, res, next) => {
    const keyword = req.params.keyword;
    searchModule.findNewsByKeyword(keyword).then((result) => {
        res.send(result);
    }).catch((err) => {
        next(err);
    });
};

export default{
    getNewsByClass, 
    getNewsByKeyword
}