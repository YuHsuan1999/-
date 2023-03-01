import mysql from 'mysql';
import httpStatus from 'http-status';
import config from '../../config/config';
import APIError from '../helper/APIError';

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: config.mysqlHost,
    user: config.mysqlUserName,
    password: config.mysqlPass,
    database: config.mysqlDatabase
  });

export const findHospitalNameInfo = (searchName) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                //searchName = '%' + searchName + '%'
                connection.query('SELECT * FROM original WHERE Classification = ?', searchName, (error, hospitalResult) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (hospitalResult.length >= 1) {
                        let resultData = {
                            status: true,
                            data: hospitalResult
                        }
                        resolve(resultData);
                        /*for(let i=0; i<hospitalResult.length; i++) {
                            connection.query('SELECT division FROM division WHERE name = ?', hospitalResult[i].name, (error, divisionResult) => {
                                if (error) {
                                    console.error('SQL Error: ', error);
                                    reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                                } else if (divisionResult.length >= 1) {
                                    let allDivision='';
                                    for( let j=0; j<divisionResult.length; j++) {
                                        allDivision += divisionResult[j].division + ' '
                                    }
                                    hospitalResult[i].division = allDivision
                                    
                                    if( i == hospitalResult.length-1 ) {
                                        let resultData = {
                                            status: true,
                                            data: hospitalResult
                                        }
                                        resolve(resultData);
                                    }
                                } else {
                                    hospitalResult[i].division = ''
                                    if( i == hospitalResult.length-1 ) {
                                        let resultData = {
                                            status: true,
                                            data: hospitalResult
                                        }
                                        resolve(resultData);
                                    }
                                }
                            });
                        }*/
                    } else {
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    }
                    connection.release();
                });
            }
        });
    });
};

export const findHospitalArea = ( searchArea ) => {
    return new Promise( (resolve, reject ) => {
        connectionPool.getConnection( (connectionError, connection ) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                searchArea = '%' + searchArea + '%'
                connection.query('SELECT * FROM hospital WHERE address like ?', searchArea, (error, hospitalResult) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (hospitalResult.length >= 1) {
                        for(let i=0; i<hospitalResult.length; i++) {
                            connection.query('SELECT division FROM division WHERE name = ?', hospitalResult[i].name, (error, divisionResult) => {
                                if (error) {
                                    console.error('SQL Error: ', error);
                                    reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                                } else if (divisionResult.length >= 1) {
                                    let allDivision='';
                                    for( let j=0; j<divisionResult.length; j++) {
                                        allDivision += divisionResult[j].division + ' '
                                    }
                                    hospitalResult[i].division = allDivision
                                    
                                    if( i == hospitalResult.length-1 ) {
                                        let resultData = {
                                            status: true,
                                            data: hospitalResult
                                        }
                                        resolve(resultData);
                                    }
                                } else {
                                    hospitalResult[i].division = ''
                                    if( i == hospitalResult.length-1 ) {
                                        let resultData = {
                                            status: true,
                                            data: hospitalResult
                                        }
                                        resolve(resultData);
                                    }
                                }
                            });
                        }
                    } else {
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    }
                    connection.release();
                });
            }
        });
    });
};

export const findHospitalDivision = ( serchDivision ) => {
    return new Promise( (resolve, reject ) => {
        connectionPool.getConnection( (connectionError, connection ) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query('SELECT name FROM division WHERE division = ?', serchDivision, (error, divisionResult) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (divisionResult.length >= 1) {
                        let result = []
                        for( let i=0; i<divisionResult.length; i++ ) {
                            findHospitalNameInfo(divisionResult[i].name).then( ( hospitalResult ) => {
                                result.push( hospitalResult.data[0] )
                                
                                if( i == divisionResult.length-1) {
                                    let resultData = {
                                        status: true,
                                        data: result
                                    }
                                    resolve(resultData);
                                }
                            })
                        }
                    } else {
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    }
                    connection.release();
                });
            }
        });
    });
}

export const findHospitalAllNameInfo = (searchName) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query('SELECT * FROM original WHERE Classification = ?', searchName, (error, hospitalResult) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (hospitalResult.length >= 1) {
                        let resultData = {
                            status: true,
                            data: hospitalResult
                        }
                        resolve(resultData);
                        /*for(let i=0; i<hospitalResult.length; i++) {
                            connection.query('SELECT division FROM division WHERE name = ?', hospitalResult[i].name, (error, divisionResult) => {
                                if (error) {
                                    console.error('SQL Error: ', error);
                                    reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                                } else if (divisionResult.length >= 1) {
                                    let allDivision='';
                                    for( let j=0; j<divisionResult.length; j++) {
                                        allDivision += divisionResult[j].division + ' '
                                    }
                                    hospitalResult[i].division = allDivision
                                    
                                    if( i == hospitalResult.length-1 ) {
                                        let resultData = {
                                            status: true,
                                            data: hospitalResult
                                        }
                                        resolve(resultData);
                                    }
                                } else {
                                    hospitalResult[i].division = ''
                                    if( i == hospitalResult.length-1 ) {
                                        let resultData = {
                                            status: true,
                                            data: hospitalResult
                                        }
                                        resolve(resultData);
                                    }
                                }
                            });
                        }*/
                    } else {
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    }
                    connection.release();
                });
            }
        });
    });
};

export default {
    findHospitalNameInfo,
    findHospitalArea,
    findHospitalDivision,
    findHospitalAllNameInfo
}