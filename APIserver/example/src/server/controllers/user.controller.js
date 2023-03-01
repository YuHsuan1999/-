import userModule from '../modules/user.module'

export const userGet = (req, res, next) => {
    const userAccount = req.body.account;
    userModule.getUser( userAccount ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
}

export const userLogin = (req, res, next) => {
    const loginImformation = req.body;
    userModule.userLogin( loginImformation ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export const userRegist = (req, res, next) => {
    const registImformation = req.body;
    userModule.addNewUser( registImformation ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export const userModify = (req, res, next) => {
    const userImformation = req.body;
    const account = req.body.account;
    userModule.modifyUser( userImformation, account ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export default {
    userLogin,
    userRegist,
    userModify,
    userGet
}