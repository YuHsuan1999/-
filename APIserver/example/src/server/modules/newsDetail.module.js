import mysql from 'mysql';
import httpStatus from 'http-status';
import config from '../../config/config'
import APIError from '../helper/APIError'

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: config.mysqlHost,
    user: config.mysqlUserName, 
    password: config.mysqlPass, 
    database: config.mysqlDatabase
});

export const findNewsDetail = (newsId) =>{
    return new Promise((resolve, reject) =>{
        connectionPool.getConnection((connectionError, connection) =>{
            if(connectionError){
                reject(connectionError);
            }
            else{
                let sql = 'SELECT News_id, Provenance, Date, Classification, Title, Content, Reliability FROM original NATURAL JOIN processed_data where News_id = ?';
                connection.query(sql, newsId, (error, NewsResult) => {
                    if(error){
                        console.error('SQL Error', error);
                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                    }
                    else if(NewsResult.length >= 1){
                        let sql2 = 'SELECT sum(sentiment * (likes+1)) as s, count(*) as c FROM `comments` where News_id = ? and sentiment <> 2';
                        connection.query(sql2, NewsResult[0].News_id, (error, Result) => {
                            if(error){
                                console.error('SQL Error', error);
                                reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                            }
                            else{
                                if(Result[0].c >= 1){
                                    var sentiment = (Result[0].s / Result[0].c) * 100
                                    sentiment = parseInt(sentiment)
                                    NewsResult[0].sentiment = {
                                        positive: sentiment, 
                                        negative: 100-sentiment
                                    };
                                }
                                else{
                                    NewsResult[0].sentiment = '資料過少，無法分析';
                                }
                                let sql3 = 'SELECT keyword FROM keywords WHERE News_id = ? LIMIT 1, 4';
                                connection.query(sql3, NewsResult[0].News_id, (error, KeywordResult) => {
                                    if(error){
                                        console.error('SQL Error', error);
                                        reject(new APIError('error', httpStatus.INTERNAL_SERVER_ERROR, true, 500));
                                    }
                                    else if(Result.length >= 1){
                                        NewsResult[0].keywords = KeywordResult
                                        let resultData = {
                                            status: true, 
                                            data: NewsResult
                                        }
                                        resolve(resultData);
                                    }
                                    else{
                                        NewsResult[0].keywords = ''
                                        let resultData = {
                                            status: true, 
                                            data: NewsResult
                                        }
                                        resolve(resultData);
                                    }
                                });
                            }
                        });
                    }
                    else{
                        let resultData = {
                            status: true,
                            data: 'news_id錯誤，查無結果'
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
    findNewsDetail
}