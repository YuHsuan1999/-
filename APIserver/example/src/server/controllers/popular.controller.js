import popularModule from '../modules/popular.module'

export const getPopularNewsInfo = (req, res, next) => {
    popularModule.findPopularNewsInfo().then( (result) =>{
        res.send(result);
    } ).catch( (err) => {
        next(err);
    });
};

export default{
    getPopularNewsInfo
}