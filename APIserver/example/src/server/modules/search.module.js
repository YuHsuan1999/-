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

export const findNewsByClass = (classification) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) =>{
            if(connectionError){
                reject(connectionError);
            }
            else{
                let sql = 'SELECT News_id, Provenance, Date, Classification, Title, Summary, Reliability, Popularity FROM processed_data NATURAL JOIN original WHERE Classification = ? ORDER by Popularity DESC';
                
                connectionPool.query(sql, classification, (error, Result) => {
                    if(error){
                        console.error('SQL Error', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    }
                    else if(Result.length >= 1){
                        let resultData = {
                            status: true,
                            data: Result
                        }
                        resolve(resultData);
                    }
                    else{
                        let resultData = {
                            status: true,
                            data: '查無結果'
                        }
                        resolve(resultData);
                    }
                    connection.release();
                });
            }
        });
    });
};

export const findNewsByKeyword = (keyword) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if(connectionError){
                reject(connectionError);
            }
            else{
                keyword = '%' + keyword + '%';
                let sql = 'SELECT News_id, Provenance, Date, Classification, Title, Summary, Reliability, Popularity FROM processed_data NATURAL JOIN original WHERE title like ? ORDER by Popularity DESC';
                
                connection.query(sql, keyword, (error, Result) => {
                    if(error){
                        console.error('SQL Error', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    }
                    else if(Result.length >= 1){
                        let resultData = {
                            status: true, 
                            data: Result
                        }
                        resolve(resultData);
                    }
                    else{
                        let resultData = {
                            status: true,
                            data: '查無結果'
                        }
                        resolve(resultData);
                    }
                    connection.release();
                });
            }
        });
    });
};

export default{
    findNewsByClass, 
    findNewsByKeyword
}