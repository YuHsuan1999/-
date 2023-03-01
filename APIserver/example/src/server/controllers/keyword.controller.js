import keywordModule from '../modules/keyword.module'

export const postKeyword = (req, res, next) => {
    const newsInfo = req.body;
    keywordModule.postKeyword( newsInfo ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export default {
    postKeyword
}