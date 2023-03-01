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


export const postKeyword = ( newsInfo ) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                let sql = 'INSERT INTO keywords(News_id, Provenance, keyword) VALUES(?, ?, ?)'
                connection.query(sql, [newsInfo.newsID, newsInfo.provenance, newsInfo.keyword], (error, result) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (result.affectedRows === 1) {
                        resolve({ code: 200, message: '關鍵字新增成功！' }); // 寫入成功回傳寫入
                    } else {
                        reject(new APIError('result not found', httpStatus.NOT_FOUND, true, 400));
                    }
                    connection.release();
                });
            }
        });
    });
}

export default {
    postKeyword
}