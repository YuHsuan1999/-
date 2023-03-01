import re #search 
import requests #抓取
from bs4 import BeautifulSoup
import pymysql
# import charts

headers_Get = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept-Encodin':'gzip, deflate, br',
    'Accept-Language':'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7'
}

def connect_to_db():
    # 資料庫參數設定
    db_settings = {
        "host": "104.199.175.193",
        "port": 3306,
        "user": "root",
        "password": "asas7099s",
        "db": "iosapp",
        "charset": "utf8"
    }
    try:
        # 建立Connection物件
        conn = pymysql.connect(**db_settings)
        print('Success connect to database')
        return conn

    except Exception as ex:
        print(ex)

def main():
    db_connect = connect_to_db()        #連接至資料庫
    hospital_name = []
    hospital_url = []
    hospital_add = []
    hospital_phone = []
    hospital_type = []
    jump_link = []

    for i in range(1, 48):
        url = 'http://www.5151.tw/dental/city2.php?areaid=008&areaid2=&page=' + str(i)
        response = requests.get(url)
        response.encoding = 'big5'
        soup = BeautifulSoup(response.text, "lxml")
        find_td = soup.findAll("td", {'class', 'link04'})

        for j in range(0, len(find_td), 2):
            # print(find_td[i]) # 找到一家醫院資訊網址、名稱
            find_td_jump_link = find_td[j].find('a')
            # print(find_td_jump_link['href']) # 找到跳轉頁面的url
            jump_link.append(find_td_jump_link['href'])
            print("Get successful " + find_td_jump_link['href'])
        print("Get jump url successful")

    for i in range(0, len(jump_link)):
        hospital_imformation_url = 'http://www.5151.tw/dental/' + jump_link[i]
        response_hos = requests.get(hospital_imformation_url)
        response_hos.encoding = 'big5'
        soup_hos = BeautifulSoup(response_hos.text, "lxml")
        find_hos_td = soup_hos.findAll("td")
        find_td_link = find_hos_td[30].find('a') # get hospital url
        try:
            with db_connect.cursor() as cursor:
                command_medicine = "INSERT INTO dental(name, url, address, phone)VALUES(%s, %s, %s, %s)"
                command_division = "INSERT INTO dental_division(name, division)VALUES(%s, %s)"

                cursor.execute( command_medicine, (find_hos_td[22].text, find_td_link['href'], find_hos_td[34].text, find_hos_td[38].text ) )
                hospital_name.append(find_hos_td[22].text) # hospital name
                hospital_url.append(find_td_link['href']) # hospital url
                hospital_add.append(find_hos_td[34].text) # hospital address
                hospital_phone.append(find_hos_td[38].text) # hospital phone call
                divisions = find_hos_td[46].text.split()
                for k in divisions:
                    cursor.execute( command_division, (find_hos_td[22].text, k ) )
                print('Success append data to database')

                # 儲存變更
                db_connect.commit()
        except Exception as ex:
            print(ex)

    # print(hospital_name[0])
    # print(hospital_url[0])
    # print(hospital_add[0])
    # print(hospital_phone[0])
    # print(hospital_type[0])
if __name__ == '__main__':
    main()