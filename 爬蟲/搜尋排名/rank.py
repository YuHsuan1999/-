import mysql
import datetime
import requests
import json

def getRank():
    conn = mysql.connect_mysql()
    today = datetime.date.today()
    headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',  
    }

    params = {
        'hl': 'zh-TW', #繁體中文，hl > Language to return result headers in
        'tz': '-480', #時區，tz > Timezone using Etc/GMT
        'geo': 'TW', #地區，geo > two letter country abbreviation
    }

    url = 'https://trends.google.com.tw/trends/api/dailytrends'
    response = requests.get(url, headers=headers, params=params)

    json_str = response.text[5:] #刪去雜訊
    j_dic = json.loads(json_str) #將str轉成dict


    #分析json檔
    #trendingSearchesDays > 搜尋日期。[0]為今天，[1]為昨天
    #trendingSearches > 關鍵字。
    topics = j_dic['default']['trendingSearchesDays'][0]['trendingSearches']
    data = ''
    for i, topic in enumerate(topics):
        if i < 20:
            data += '關鍵字: ' + topic['title']['query'] + '\n'
            data += '搜索量: ' + topic['formattedTraffic'] + '\n'
            data += '文章:' + topic['articles'][0]['title'] + '\n'
            data += '連結:' + topic['articles'][0]['url'] + '\n'
            data += '-------------------------\n'


            check = None
            # 檢查是否已在DB中
            with conn.cursor() as cursor:
                sql = 'SELECT keyword FROM popular_keywords WHERE keyword = %s'
                cursor.execute(sql, (topic['title']['query']))
                result = cursor.fetchall()
                for row in result:
                    check = row[0]
                    print(check)
            # 若已在DB中則跳過
            if(check != None):
                continue
            else:
                with conn.cursor() as cursor:
                # 新增資料SQL語法
                    command = 'INSERT INTO popular_keywords(date, keyword, weight) VALUES(%s, %s, %s)'
                    weight = (20 - i)
                    cursor.execute(command, (today, topic['title']['query'], str(weight)))
                    # 儲存變更
                conn.commit()

    #for i in data.split('關鍵字: '):
    #    print(i)
    

    #data = data.split('關鍵字: ', 1)[1]
    #temp = data.split('\n')[0]