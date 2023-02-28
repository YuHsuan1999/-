import pymysql

def connect_mysql():
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
        return conn
        
    except Exception as ex:
        print(ex)

