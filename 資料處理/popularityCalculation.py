import sys
sys.path.append("..")
import mysql
from mysql import connect_mysql
import time
import datetime

conn = connect_mysql()

def popularity():
    with conn.cursor() as cursor:
        command = 'select News_id, Provenance, k.keyword, pk.weight from original NATURAL JOIN keywords as k INNER JOIN popular_keywords AS pk on k.keyword = pk.keyword ORDER BY weight DESC'
        cursor.execute(command)
        result = cursor.fetchall()
        weight_check = 30
        count = 1
        run = 0

        for row in result:
            news_id = row[0]
            provenance = row[1]
            weight = row[3]

            print(str(news_id) + ' ' + provenance)

            if(run > 2):    #若同一關鍵字之新聞超過兩筆，跳過，換下一個關鍵字
                weight_check -= 1
                run = 0

            if(weight > weight_check):  #若該新聞關鍵字權重大於現在要找的關鍵字權重，代表該關鍵字太多筆了要被跳過
                continue

            while(weight < weight_check):   #若該新聞關鍵字權重小於現在要找的關鍵字權重，代表有關鍵字並無新聞
                weight_check -= 1
                run = 0


            with conn.cursor() as cursor:
                sql = 'UPDATE processed_data SET Popularity = %s WHERE News_id = %s AND Provenance = %s'
                cursor.execute(sql, (str(weight), news_id, provenance))
            conn.commit()
            
            count += 1
            run += 1

