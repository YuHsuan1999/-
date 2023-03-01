import commentModule from '../modules/comment.module'

export const getComment = (req, res, next) => {
    const newsid = req.params.newsid;
    commentModule.getComment( newsid ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export const postComment = (req, res, next) => {
    const commentInfo = req.body;
    commentModule.postComment( commentInfo ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export const likeComment = (req, res, next) => {
    const commentInfo = req.body;
    commentModule.likeComment( commentInfo ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export default {
    getComment,
    postComment,
    likeComment
}