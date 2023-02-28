import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
import mysql
from mysql import connect_mysql
import lxml



def SETN():                 #三立
    x = 0
    conn = connect_mysql()
    href = "https://www.setn.com/ViewAll.aspx?PageGroupID="
    number = {5: '國際', 6: '政治', 41: '社會', 4: '生活', 65: '健康', 34: '運動', 12: '汽車', 2: '財經', 7: '科技'}

    for i in number.keys():
        r = requests.get(href + str(i))
        soup = bs(r.text, "lxml")
        a = soup.find("div", {"class": "row NewsList"})
        for title_temp in (a.findAll("a", {"class": "gt"})):
            x += 1
            if(x == 15):
                break
            #初始化
            content = ''

            content_url = 'https://www.setn.com' + title_temp['href']
            news_id = content_url.split('=', 1)[1]
            news_id = news_id.split('&', 1)[0]
            #print('三立 ' + news_id + ' ' + number[i])

            # 抓取內容
            r2 = requests.get(content_url)
            soup2 = bs(r2.text, "lxml")
            a2 = soup2.find("div", {"id": "Content1"})
            #-----------------------------------------------------------
            #標題
            title2 = soup2.find("title").text
            title2 = title2.split("	")[1]
            title = title2.split(" | ")[0]

            classification = title2.split(" | ")[1].split(" | ")[0]
            
            print(title2)
            print('三立 ' + news_id + ' ' + classification)
            #-----------------------------------------------------------

            # 日期
            date = soup2.find("div", {"class": "page-title-text"})
            date = date.find('time', {'class': 'page-date'})
            date = date.text
            print(date)
            print(content_url)
            for content_temp in (a2.findAll("p")):
                if(('▲' in content_temp.text)):     #跳過圖片註解
                    continue
                if((('/' in content_temp.text) or ('／' in content_temp.text)) and ('報導' in content_temp.text)):
                    continue
                content += content_temp.text
            #print(content)
            # 確認是否已在DB中
            with conn.cursor() as cursor:
                sql = 'SELECT News_id FROM original WHERE News_id = %s AND Provenance = \'三立\''
                cursor.execute(sql, (news_id))
                result = cursor.fetchall()
                check = None
                for row in result:
                    check = row[0]

            # 若已在DB中則跳過
            if(str(check) == news_id):
                continue
            with conn.cursor() as cursor:
                # 新增資料SQL語法
                command = 'INSERT INTO original VALUES(%s, %s, %s, %s, %s, %s, %s)'
                cursor.execute(command, (news_id, date, title, content_url, number[i], '三立', content))
                # 儲存變更
            conn.commit()

            with conn.cursor() as cursor:
                # 新增資料SQL語法
                command = 'INSERT INTO processed_data (News_id, Provenance) VALUES(%s, %s)'
                cursor.execute(command, (news_id, '三立'))
                # 儲存變更
            conn.commit()
            print('--------------\n')

#-------------------------------------------------------------------------------------------------------------------

def EBC():              #東森
    x = 0
    conn = connect_mysql()
    href = "https://news.ebc.net.tw/news/"
    number = {'world': '國際', 'politics': '政治', 'society': '社會'}

    for i in number.keys():
        r = requests.get(href + i)
        soup = bs(r.text, "lxml")
        a = soup.find("div", {"class": "news-list-box"})
        for temp in (a.findAll("div", {'class': 'style1'})):
            x += 1
            if(x == 15):
                break
            
            title_temp = temp.find('a', {'onclick': 'Read(this,\'rade\');'})
            #print(title_temp.text)
            if(title_temp == None):
                continue

            #初始化
            content = ''
            title = title_temp['title']
            print(title)

            content_url = 'https://news.ebc.net.tw/' + title_temp['href']
            print(content_url)

            news_id = content_url.split('/')[-1]
            print(news_id)

            # 抓取內容
            r2 = requests.get(content_url)
            soup2 = bs(r2.text, "lxml")
            a2 = soup2.find("div", {"class": "raw-style"})
            # 日期
            date = soup2.find("div", {"class": "info"})
            date = date.find('span', {'class': 'small-gray-text'})
            date = date.text.split('東森新聞')[0]
            print(date)

            for content_temp in (a2.findAll("p")):
                if(('▼' in content_temp.text) or ('●' in content_temp.text) or ('封面圖' in content_temp.text) or ('★' in content_temp.text)):     #跳過圖片註解
                    continue
                
                if(('延伸閱讀' in content_temp.text)):
                    break
                
                if(('訂閱【東森新聞】' in content_temp.text)):
                    content += content_temp.text.split('訂閱【東森新聞】')[0]
                else:
                    content += content_temp.text

            #print(content)
            
            # 確認是否已在DB中
            check = 0
            with conn.cursor() as cursor:
                sql = 'SELECT News_id FROM original WHERE News_id = %s AND Provenance = \'東森\''
                cursor.execute(sql, (news_id))
                result = cursor.fetchall()
                check = None
                for row in result:
                    check = row[0]

            # 若已在DB中則跳過
            if(str(check) == news_id):
                continue
            with conn.cursor() as cursor:
                # 新增資料SQL語法
                command = 'INSERT INTO original VALUES(%s, %s, %s, %s, %s, %s, %s)'
                cursor.execute(command, (news_id, date, title, content_url, number[i], '東森', content))
                # 儲存變更
            conn.commit()

            with conn.cursor() as cursor:
                # 新增資料SQL語法
                command = 'INSERT INTO processed_data (News_id, Provenance) VALUES(%s, %s)'
                cursor.execute(command, (news_id, '東森'))
                # 儲存變更
            conn.commit()



            print('--------------')



#-------------------------------------------------------------------------------------------------------
def TVBS():
    conn = connect_mysql()
    href = "https://news.tvbs.com.tw/realtime/"
    number = number = {'world': '國際', 'local': '社會', 'entertainment': '娛樂', 'sports': '運動', 'tech': '科技', 'health': '健康'}
    x = 0
    for i in number.keys():
        x += 1
        if(x == 15):
            break
        r = requests.get(href + str(i))
        soup = bs(r.text, "lxml")
        soup = soup.find("div", {"class": "news_list"})
        a = soup.find("div", {"class": "list"})
        for title_temp in (a.findAll("li")):
            #初始化
            content = ''

            url = title_temp.find('a')
            if(url == None):
                continue
            title = url.text
            print(title)
            content_url = 'https://news.tvbs.com.tw' + url['href']
            print(content_url)
            news_id = content_url.split('/')[-1]
            print(news_id)

            # 抓取內容
            r2 = requests.get(content_url)
            soup2 = bs(r2.text, "lxml")
            date = soup2.find('div', {'class': 'author'}).text
            date = date.split('發佈時間：')[1]
            date = date.split(' ', 3)[0] + ' ' + date.split(' ', 3)[1]
            a2 = soup2.find("div", {"id": "news_detail_div"})
            a3 = a2.find('p')
            if(a3 != None):
                content += (a3.text.split('\n')[0])
            else:
                a3 = a2.text.split('<br/>')[0].split('if')[0]
                for k in a3.split('\n'):
                    if(k != ''):
                        content += (k + '\n')

            for j in (a2.text.split('&nbsp')):
                for content_temp in (j.split('if')):
                    if(('document' in content_temp) or ('detectmob' in content_temp) or ('e_read_inarticle' in content_temp)):
                        continue
                    content += (content_temp.split('\n')[0] + '\n')

            print(content)

            # 確認是否已在DB中
            with conn.cursor() as cursor:
                sql = 'SELECT News_id FROM original WHERE News_id = %s AND Provenance = \'TVBS\''
                cursor.execute(sql, (news_id))
                result = cursor.fetchall()
                check = None
                for row in result:
                    check = row[0]

            # 若已在DB中則跳過
            if(check != None):
                if(str(check) == news_id):
                    continue
            with conn.cursor() as cursor:
                # 新增資料SQL語法
                command = 'INSERT INTO original VALUES(%s, %s, %s, %s, %s, %s, %s)'
                cursor.execute(command, (news_id, date, title, content_url, number[i], 'TVBS', content))
                # 儲存變更
            conn.commit()

            with conn.cursor() as cursor:
                # 新增資料SQL語法
                command = 'INSERT INTO processed_data (News_id, Provenance) VALUES(%s, %s)'
                cursor.execute(command, (news_id, 'TVBS'))
                # 儲存變更
            conn.commit()

            
            print('--------------')
