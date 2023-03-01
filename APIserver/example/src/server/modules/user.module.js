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

Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
  
    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('');
  };

export const getUser = ( userAccount ) => {
    return new Promise( (resolve, reject ) => {
        connectionPool.getConnection( (connectionError, connection ) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query('SELECT * FROM user WHERE account = ?', userAccount, (error, result) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (result.length >= 1) {
                        result[0].birthDay = result[0].birthDay.yyyymmdd()
                        let resultData = {
                            status: true,
                            data: result
                        }
                        resolve( resultData );
                    } else {
                        reject(new APIError('account_not_found', httpStatus.NOT_FOUND, true, 400));
                    }
                    connection.release();
                });
            }
        });
    });
}

export const addNewUser = ( userImformation ) => {
    return new Promise( (resolve, reject ) => {
        connectionPool.getConnection( (connectionError, connection ) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query('INSERT INTO user SET ?', userImformation, (error, result) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        if(error.stack.search('Duplicate entry') != -1 ) {
                            reject(new APIError('已有帳號存在！', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                        }　else if (error.stack.search('birthDay') != -1 ) {
                            reject(new APIError('生日格式錯誤！', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                        } else {
                            reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                        }
                    } else if (result.affectedRows === 1) {
                        resolve({ code: 200, message: '使用者新增新增成功！' }); // 寫入成功回傳寫入id
                    }
                    connection.release();
                });
            }
        });
    });
}

export const modifyUser = ( userImformation, account ) => {
    return new Promise( (resolve, reject ) => {
        connectionPool.getConnection( (connectionError, connection ) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query('UPDATE user SET ? WHERE account = ?', [userImformation, account], (error, result) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (result.affectedRows === 0) { // 寫入時發現無該筆資料
                        reject(new APIError('username_not_found', httpStatus.NOT_FOUND, true, 400));
                    } else if (result.message.match('Changed: 1')) { // 寫入成功
                        resolve({ code: 200, message: '資料修改成功' });
                    } else {
                        resolve({ code: 200, message: '資料無異動' });
                    }
                    connection.release();
                });
            }
        });
    });
}

export const userLogin = ( userImformation ) => {
    return new Promise( (resolve, reject ) => {
        connectionPool.getConnection( (connectionError, connection ) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query('SELECT * FROM user WHERE account = ?', userImformation.account, (error, result) => {
                    if (error) {
                        console.error('SQL Error: ', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    } else if (result.length >= 1) {
                        if( result[0].password == userImformation.password ) {
                            resolve({ code: 200, message: '登入成功' }); // 登入成功
                        } else {
                            reject(new APIError('密碼錯誤', httpStatus.NOT_FOUND, true, 400));
                        }
                    } else {
                        reject(new APIError('account_not_found', httpStatus.NOT_FOUND, true, 400));
                    }
                    connection.release();
                });
            }
        });
    });
}

export default {
    addNewUser,
    modifyUser,
    userLogin,
    getUser
}