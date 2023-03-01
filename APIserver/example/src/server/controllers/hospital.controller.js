import hospitalModule from '../modules/hospital.module'

export const getHospitalInfoByName = (req, res, next) => {
    const hospitalName = req.params.name;
    hospitalModule.findHospitalNameInfo( hospitalName ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export const getHospitalInfoByArea = (req, res, next) => {
    const hospitalArea = req.params.area;
    hospitalModule.findHospitalArea( hospitalArea ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export const getHospitalDivision = (req, res, next) => {
    const hospitalDivision = req.params.division;
    hospitalModule.findHospitalDivision( hospitalDivision ).then( ( result ) => {
        res.send( result );
    } ).catch( ( err ) => {
        next( err );
    });
};

export default {
    getHospitalInfoByName,
    getHospitalInfoByArea,
    getHospitalDivision
}