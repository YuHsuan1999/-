import newsDetailModule from '../modules/newsDetail.module'

export const getNewsDetail = (req, res, next) => {
    const newsId = req.params.newsId
    newsDetailModule.findNewsDetail(newsId).then((result) =>{
        res.send(result);
    }).catch((err) =>{
        next(err);
    });
};

export default{
    getNewsDetail
}