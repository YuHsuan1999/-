import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report
import random
import re
import string


def reliability():
    df_fake = pd.read_csv("Fake.csv")
    df_true = pd.read_csv("True.csv")

    df_fake["class"] = 0
    df_true["class"] = 1


    df_fake_manual_testing = df_fake.tail(10)
    for i in range(23480,23470,-1):
        df_fake.drop([i], axis = 0, inplace = True)

    df_true_manual_testing = df_true.tail(10)
    for i in range(21416,21406,-1):
        df_true.drop([i], axis = 0, inplace = True)


    df_fake_manual_testing["class"] = 0
    df_true_manual_testing["class"] = 1

    df_manual_testing = pd.concat([df_fake_manual_testing,df_true_manual_testing], axis = 0)
    df_manual_testing.to_csv("manual_testing.csv")
    df_marge = pd.concat([df_fake, df_true], axis =0 )


    df = df_marge.drop(["title", "subject","date"], axis = 1)

    df = df.sample(frac = 1)

    df.reset_index(inplace = True)
    df.drop(["index"], axis = 1, inplace = True)

    def wordopt(text):
        text = text.lower()
        text = re.sub('\[.*?\]', '', text)
        text = re.sub("\\W"," ",text) 
        text = re.sub('https?://\S+|www\.\S+', '', text)
        text = re.sub('<.*?>+', '', text)
        text = re.sub('[%s]' % re.escape(string.punctuation), '', text)
        text = re.sub('\n', '', text)
        text = re.sub('\w*\d\w*', '', text)    
        return text

    df["text"] = df["text"].apply(wordopt)
    x = df["text"]
    y = df["class"]
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.25)

    from sklearn.feature_extraction.text import TfidfVectorizer
    vectorization = TfidfVectorizer()
    xv_train = vectorization.fit_transform(x_train)
    xv_test = vectorization.transform(x_test)

    from sklearn.linear_model import LogisticRegression
    LR = LogisticRegression()
    LR.fit(xv_train,y_train)
    pred_lr=LR.predict(xv_test)

    from sklearn.tree import DecisionTreeClassifier
    DT = DecisionTreeClassifier()
    DT.fit(xv_train,y_train)
    pred_dt = DT.predict(xv_test)

    from sklearn.ensemble import GradientBoostingClassifier
    GBC = GradientBoostingClassifier(random_state=0)
    GBC.fit(xv_train,y_train)
    pred_gbc = GBC.predict(xv_test)

    from sklearn.ensemble import RandomForestClassifier
    RFC = RandomForestClassifier(random_state=0)
    RFC.fit(xv_train,y_train)
    pred_rfc = RFC.predict(xv_test)

    def output_lable(n):
        if n == 1:
            return "Fake News"
        elif n == 0:
            return "Real News"
        
    def manual_testing(news):
        testing_news = {"text":[news]}
        new_def_test = pd.DataFrame(testing_news)
        new_def_test["text"] = new_def_test["text"].apply(wordopt) 
        new_x_test = new_def_test["text"]
        new_xv_test = vectorization.transform(new_x_test)
        
        pred_LR = LR.predict(new_xv_test)
        pred_DT = DT.predict(new_xv_test)
        pred_GBC = GBC.predict(new_xv_test)
        pred_RFC = RFC.predict(new_xv_test)
        
        if(pred_LR[0] == 0):
            predictions_LR = (random.randrange(50, 100))*0.25
        else:
            predictions_LR = (random.randrange(1, 50))*0.25
        
        if(pred_DT[0] == 0):
            predictions_DT = (random.randrange(50, 100))*0.25
        else:
            predictions_DT = (random.randrange(1, 50))*0.25
        
        if(pred_GBC[0] == 0):
            predictions_GBC = (random.randrange(50, 100))*0.25
        else:
            predictions_GBC = (random.randrange(1, 50))*0.25
        
        if(pred_RFC[0] == 0):
            predictions_RFC = (random.randrange(50, 100))*0.25
        else:
            predictions_RFC = (random.randrange(1, 50))*0.25
        
        total = predictions_LR + predictions_DT + predictions_GBC + predictions_RFC
        
        # 將資料加入 POST 請求中
        api_url = "http://140.134.26.31:3000/api/process/postReliability"
        todo = {'newsID':News_id, 'reliability':total}
        response = requests.post(api_url, json=todo)
        response.json()
        
        print("total : {}\n".format(total))
        print("\n\nLR Prediction: {} \nDT Prediction: {} \nGBC Prediction: {} \nRFC Prediction: {}".format(output_lable(pred_LR[0]), 
                                                                                                                output_lable(pred_DT[0]), 
                                                                                                                output_lable(pred_GBC[0]), 
                                                                                                                output_lable(pred_RFC[0])))


    import requests

    r = requests.get("http://140.134.26.31:3000/api/process/getNews/20211024?$format=json", verify=False)
    list_of_dicts = r.json()
    print(type(r))
    print(type(list_of_dicts))


    for i in range(0,10000):
        strs = list_of_dicts["data"][i]['Content']
        News_id = list_of_dicts["data"][i]['News_id']
        if(News_id == 1000665):continue
            
    #     print(strs)
    #     translation = pipeline("translation_zh_to_en", model=model, tokenizer=tokenizer)
    #     translated_text = translation(strs, max_length=1000)[0]['translation_text']
    #     print(translated_text)
        print(News_id)
        manual_testing(strs)
