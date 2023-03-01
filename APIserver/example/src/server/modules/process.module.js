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

export const findAllNews = (day) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) =>{
            if(connectionError){
                reject(connectionError);
            }
            else{
                let sql = 'SELECT  O.News_id, O.Provenance, O.Content FROM processed_data P, original O \
                            WHERE ((O.News_id = P.News_id) and O.News_id NOT IN (SELECT News_id FROM `keywords`)) or\
                            (P.News_id = O.News_id and (P.Summary is null or P.Reliability is null))';
                
                connectionPool.query(sql, day, (error, Result) => {
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
                        reject(new APIError('result not found', httpStatus.NOT_FOUND, true, 400));
                    }
                    connection.release();
                });
            }
        });
    });
};

export const postSummary = ( Summary ) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            }
            else {
                let sql = 'UPDATE processed_data SET summary = ? WHERE News_id = ?';
                connection.query(sql, [Summary.summary, Summary.newsID], (error, result) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (result.affectedRows === 1) {
                        resolve({ code: 200, message: 'summary更新成功！' }); // 成功回傳寫入
                    } else {
                        reject(new APIError('result not found', httpStatus.NOT_FOUND, true, 400));
                    }
                    connection.release();
                });
            }
        });
    });
}

export const postReliability = ( Reliability ) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            }
            else {
                let sql = 'UPDATE processed_data SET Reliability = ? WHERE News_id = ?';
                connection.query(sql, [Reliability.reliability, Reliability.newsID], (error, result) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (result.affectedRows === 1) {
                        resolve({ code: 200, message: 'Reliability更新成功！' }); // 成功回傳寫入
                    } else {
                        reject(new APIError('result not found', httpStatus.NOT_FOUND, true, 400));
                    }
                    connection.release();
                });
            }
        });
    });
}

export const postPopularity = ( Popularity ) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            }
            else {
                let sql = 'UPDATE processed_data SET Popularity = ? WHERE News_id = ?';
                connection.query(sql, [Popularity.popularity, Popularity.newsID], (error, result) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (result.affectedRows === 1) {
                        resolve({ code: 200, message: 'Popularity更新成功！' }); // 成功回傳寫入
                    } else {
                        reject(new APIError('result not found', httpStatus.NOT_FOUND, true, 400));
                    }
                    connection.release();
                });
            }
        });
    });
}

export default{
    findAllNews, 
    postSummary, 
    postReliability, 
    postPopularity
}