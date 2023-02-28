from selenium import webdriver
import mysql
import time
from bs4 import BeautifulSoup as bs
import 爬蟲.新聞留言.getNews as getNews
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import StaleElementReferenceException
from selenium.common.exceptions import WebDriverException

def getCommentsBySETN():
    path = r'C:\Users\USER\Downloads\chromedriver_win32\\chromedriver.exe'
    driver = webdriver.Chrome(path)
    driver.maximize_window()
    conn = mysql.connect_mysql()

    driver.get("https://www.facebook.com/")
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

    expandComment(driver)
    print('expand is over')

    all = [] #存放所有留言
    url = ""
    soup = bs(driver.page_source, 'html.parser')
    newsblock = soup.find_all("div", {"class": "du4w35lb k4urcfbm l9j0dhe7 sjgh65i0"})   # 每個新聞的block
    x = 0
    for detial in newsblock:
        
        print('\n\n=================================================？')
        url = detial.find('div', {'class': 'rq0escxv l9j0dhe7 du4w35lb hybvsw6c io0zqebd m5lcvass fbipl8qg nwvqtn77 k4urcfbm ni8dbmo4 stjgntxs sbcfpzgs'})
        #url = url.find('div', {'class': 'stjgntxs ni8dbmo4'})
        #print(url)
        url = url.find('a', {'oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 a8c37x1j p8dawk7l'})
        newsID = ''
        if(url != None):
            url = url['href']
            #print(url)
            if('NewsID%3D' in url):
                newsID = url.split('NewsID%3D')[1]
                newsID = newsID.split('%')[0]
                print('newID: ' + newsID)

        print('check')
            # 確認該新聞是否在DB中
        with conn.cursor() as cursor:
            sql = 'SELECT News_id FROM original WHERE News_id = %s AND Provenance = \'三立\''
            cursor.execute(sql, (newsID))
            result = cursor.fetchall()
            check_news = None
            for row in result:
                check_news = row[0]

        if(check_news == None and url != None and newsID != ''):     #該新聞有連結且不在DB中
            getNews.SETN(newsID)
            
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
                    cursor.execute(sql, (newsID, comment))
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
                    cursor.execute(command, (newsID, '三立', comment))
                    # 儲存變更
                conn.commit()
            
            print('----------------------------------------------\n')

    print(x)
    driver.quit()

    
    

def expandComment(driver):
    count = 0
    time.sleep(1)
    i = 0
    while(True and count < 20):
        try:
            time.sleep(0.5)
            content_more = driver.find_element_by_xpath("//div[@class='j83agx80 buofh1pr jklb3kyz l9j0dhe7']")
            content_more.click()
            count += 1
            time.sleep(0.5)
            
        except StaleElementReferenceException:
            content_more = driver.find_element_by_xpath("//div[@class='j83agx80 buofh1pr jklb3kyz l9j0dhe7']")
            content_more.click()
            count += 1
            time.sleep(0.5)

        except NoSuchElementException:
            print('scroll down window')
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(0.5)
        
        except WebDriverException:
            break

