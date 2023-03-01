# 專題API

### 前置條件
- Node.js version 12.18.1

### 啟動方式
1. 使用下載指令 `npm install`
2. 在終端機 `npm run build`
3. 新增另外一個終端機 `npm run start`

### ENV
1. 將檔案 .example.env 改名成 .env
2. 貼上
```
PORT=3030
NODE_ENV=development
MYSQL_HOST=Database ip address
MYSQL_PORT=3306
MYSQL_USER=Database user
MYSQL_PASS=Database password
MYSQL_DATABASE=Database name
VERSION=1.0.0
```

### 使用方法

- 拿到 hospital 的名稱
    - url: `http://127.0.0.1:3030/api/hospital/getName/ + '關鍵字'`
- 拿到 hospital 的地區搜尋結果
    - url: `http://127.0.0.1:3030/api/hospital/getArea/ + '關鍵字'`

### Deploy on server with PM2

[PM2用法](https://tn710617.github.io/zh-tw/pm2/).

First deploy:

    pm2 deploy ecosystem.config.js production setup

Update deploy:

    pm2 deploy ecosystem.config.js production update

Windows error:
    Window Terminal 沒有 `sh.exe`，所以必須將 `C:\Program Files\Git\bin` 加入環境變量中
