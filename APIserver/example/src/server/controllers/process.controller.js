import processModule from '../modules/process.module';

export const getAllNews = (req, res, next) => {
    const day = req.params.day;
    processModule.findAllNews (day).then((result) =>{
        res.send(result);
    }).catch((err) => {
        next(err);
    });
};

export const postSummary = (req, res, next) => {
    const Summary = req.body;
    processModule.postSummary( Summary ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export const postReliability = (req, res, next) => {
    const Reliability = req.body;
    processModule.postReliability( Reliability ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export const postPopularity = (req, res, next) => {
    const Popularity = req.body;
    processModule.postPopularity( Popularity ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export default{
    getAllNews, 
    postSummary, 
    postReliability, 
    postPopularity
}