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

export const getComment = ( newsid ) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                let sql = 'SELECT comment, likes, sentiment FROM comments WHERE News_id = ?'
                connection.query(sql, newsid, (error, result) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (result.length >= 1) {
                        let resultData = {
                            status: true,
                            data: result
                        }
                        resolve(resultData);
                    } else {
                        let resultData = {
                            status: true,
                            data: 'news_id錯誤 or 尚無留言'
                        }
                        resolve(resultData);
                    }
                    connection.release();
                });
            }
        });
    });
}

export const postComment = ( commentInfo ) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                let sql = 'INSERT INTO comments(News_id, Provenance, Comment) VALUES(?, ?, ?)'
                connection.query(sql, [commentInfo.newsID, commentInfo.provenance, commentInfo.comment], (error, result) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (result.affectedRows === 1) {
                        resolve({ code: 200, message: '評論新增成功！' }); // 寫入成功回傳寫入
                    } else {
                        reject(new APIError('result not found', httpStatus.NOT_FOUND, true, 400));
                    }
                    connection.release();
                });
            }
        });
    });
}

export const likeComment = ( commentInfo ) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                let sql = 'UPDATE comments SET Likes = ? WHERE News_id = ? and Provenance = ? and Comment = ?'
                connection.query(sql, [commentInfo.like, commentInfo.newsID, commentInfo.provenance, commentInfo.comment], (error, result) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (result.affectedRows === 1) {
                        resolve({ code: 200, message: '評論按讚成功！' }); // 寫入成功回傳寫入
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
    getComment,
    postComment,
    likeComment
}