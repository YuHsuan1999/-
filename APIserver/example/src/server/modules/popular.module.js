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

export const findPopularNewsInfo = () => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if(connectionError){
                reject(connectionError);
            }
            else{
                // 取前十筆熱門的新聞
                let sql = 'SELECT News_id, Provenance, Date, Classification, Title, Summary, Reliability, Popularity FROM processed_data NATURAL JOIN original ORDER by Popularity DESC LIMIT 0, 10';
                connection.query(sql, (error, Result) => {
                    if(error){
                        console.error('SQL Error', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    }
                    else if(Result.length >= 1) {
                        let resultData = {
                            status: true,
                            data: Result
                        }
                        resolve(resultData);
                    }
                    else{
                        let resultData = {
                            status: true,
                            data: "資料尚在更新中"
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
    findPopularNewsInfo
}