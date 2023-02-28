import mysql
import requests
from bs4 import BeautifulSoup as bs

def SETN(newsID: int):                 #三立

    classes = {'電影':'娛樂', '名家': '其他', '娛樂星聞': '娛樂'}

    x = 0
    conn = mysql.connect_mysql()
    content = ''
    print('Not in the DB！！！！！！！！！！！\n')
    # 抓取內容
    url = 'https://www.setn.com/News.aspx?NewsID=' + newsID
    r2 = requests.get(url)
    soup2 = bs(r2.text, "lxml")
    a2 = soup2.find("div", {"id": "Content1"})
    #-----------------------------------------------------------
    #標題
    title2 = soup2.find("title").text
    title2 = title2.split("	")[1]
    title = title2.split(" | ")[0]

    classification = title2.split(" | ")[1].split(" | ")[0]
        
    print(title)
    print('三立 ' + newsID + ' ' + classification)
    #-----------------------------------------------------------

    # 日期
    date = soup2.find("div", {"class": "page-title-text"})
    date = date.find('time', {'class': 'page-date'})
    date = date.text
    print(date)

    for content_temp in (a2.findAll("p")):
        if(('▲' in content_temp.text)):     #跳過圖片註解
            continue
        if((('/' in content_temp.text) or ('／' in content_temp.text)) and ('報導' in content_temp.text)):
            continue
        content += content_temp.text
    #print(content)

    for i in classes.keys():
        if(classification == i):
            classification = classes[i]

    with conn.cursor() as cursor:
        # 新增至original
        command = 'INSERT INTO original VALUES(%s, %s, %s, %s, %s, %s, %s)'
        cursor.execute(command, (newsID, date, title, url, classification, '三立', content))
    # 儲存變更
    conn.commit()

    with conn.cursor() as cursor:
        # 新增至待處理資料中
        command = 'INSERT INTO processed_data(News_id, Provenance) VALUE(%s, %s)'
        cursor.execute(command, (newsID, '三立'))
    # 儲存變更
    conn.commit()
    
    