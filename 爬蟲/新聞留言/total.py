import pymysql
from selenium import webdriver
import requests
import time
from bs4 import BeautifulSoup as bs
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import StaleElementReferenceException
from selenium.common.exceptions import ElementNotInteractableException
from selenium.common.exceptions import ElementClickInterceptedException

def SETN():
    db_settings = {
        "host": "127.0.0.1",
        "port": 3306,
        "user": "root",
        "password": "",
        "db": "news",
        "charset": "utf8"
    }

    try:
        conn = pymysql.connect(**db_settings)
    except Exception as ex:
        print(ex)

    path = r'C:\Users\USER\Downloads\chromedriver_win32\\chromedriver.exe'
    driver = webdriver.Chrome(path)
    driver.maximize_window()
    driver.get("https://www.facebook.com/")
    print(driver.title)

    # 登入
    time.sleep(1)
    username = driver.find_element_by_id('email')
    username.send_keys('annie881112@yahoo.com.tw')

    password = driver.find_element_by_id('pass')
    password.send_keys('A26468230')

    button = driver.find_element_by_name('login')
    button.click()

    # 跳到三立新聞頁面
    time.sleep(2)
    driver.get("https://www.facebook.com/setnews")
    print(driver.title)

    # 點開
    count = 0
    time.sleep(2)
    i = 0
    while(True and count < 30):
        try:
            content_more = driver.find_elements_by_class_name('abiwlrkh.gpro0wi8.m9osqain.buofh1pr')[i]
            
            if('隱藏' in content_more.text):
                i += 1
                continue

            content_more.click()
            count += 1
            print(str(count) + ' ' + content_more.text)
            time.sleep(0.5)
        except StaleElementReferenceException: #element is not attached to the page document
            #define the web element once again
            continue
        except ElementNotInteractableException:
            continue
        except ElementClickInterceptedException:
            i += 1
            continue
        except NoSuchElementException as e: #點完所有更多留言按鈕了
            # 滾動網頁/下拉視窗(scroll down) 
            #function4:scroll down window #function4:向下捲動視窗
            print('function4:scroll down window')
            driver.execute_script('window.scrollTo(0,document.body.scrollTop=')
    
    # 爬
    all = [] #存放所有留言
    url = ""
    soup = bs(driver.page_source, 'html.parser')
    newsblock = soup.find_all("div", {"class": "du4w35lb k4urcfbm l9j0dhe7 sjgh65i0"})   # 每個新聞的block
    x = 0
    for detial in newsblock:
        print('\n\n=================================================')
        url = detial.find('div', {'class': 'stjgntxs ni8dbmo4'})
        url = url.find('a')
        news_id = ''
        if(url != None):
            url = url['href']
            #print(url)
            if('NewsID%3D' in url):
                news_id = url.split('NewsID%3D')[1]
                news_id = news_id.split('%')[0]
                print('newID: ' + news_id)
        
        # 確認該新聞是否在DB中
        with conn.cursor() as cursor:
            sql = 'SELECT News_id FROM original WHERE News_id = %s AND Provenance = \'三立\''
            cursor.execute(sql, (news_id))
            result = cursor.fetchall()
        check_news = None
        for row in result:
            check_news = row[0]

        if(check_news == None and url != None and news_id != ''):     #該新聞有連結且不在DB中
            content = ''
            print('Not in the DB！！！！！！！！！！！\n')
            # 抓取內容
            url = 'https://www.setn.com/News.aspx?NewsID=' + news_id
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
            print('三立 ' + news_id + ' ' + classification)
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

            with conn.cursor() as cursor:
                # 新增資料SQL語法
                command = 'INSERT INTO original VALUES(%s, %s, %s, %s, %s, %s, %s)'
                cursor.execute(command, (news_id, date, title, url, classification, '三立', content))
                # 儲存變更
            conn.commit()
        
        elif(check_news == None):
            continue

        # -------------------------------------------------------------------------------
        print('\n留言：')
        comments = detial.find_all('div', {'class': 'ecm0bbzt e5nlhep0 a8c37x1j'})
        for i in comments:
            comment = ""
            for j in i.find_all('div', {'class': 'kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql'}):         #每則留言
                x += 1
                for k in j.find_all('div'):         #每一行，可能包含標註人名
                    temp = k.find('a')
                    if(temp != None):       #有人名
                        temp = temp.text
                        comment += (k.text.split(temp))[1]
                    else:           #沒人名
                        comment += (k.text + '。')
                print(comment)

                # 確認該留言是否在DB中
                with conn.cursor() as cursor:
                    sql = 'SELECT * FROM comments WHERE News_id = %s AND Provenance = \'三立\' AND comment = %s'
                    cursor.execute(sql, (news_id, comment))
                    result = cursor.fetchall()
                    check_comment = None
                    for row in result:
                        check_comment = row[0]
        
                if(check_comment != None):
                    break

                # 將留言新增至資料庫中
                with conn.cursor() as cursor:
                    # 新增資料SQL語法
                    command = 'INSERT INTO comments(News_id, Provenance, Comment) VALUES(%s, %s, %s)'
                    cursor.execute(command, (news_id, '三立', comment))
                    # 儲存變更
                conn.commit()
            
            print('----------------------------------------------\n')

    print(x)
    driver.close()
            