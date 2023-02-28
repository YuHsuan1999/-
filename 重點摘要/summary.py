
# spaCy 載入中文模型
import spacy
import zh_core_web_lg
import neuralcoref
import requests

# summarizer 載入中文模型
from summarizer import Summarizer
from summarizer.sentence_handler import SentenceHandler
from spacy.lang.zh import Chinese
from transformers import *

def summaryText():
    nlp = zh_core_web_lg.load()
    neuralcoref.add_to_pipe(nlp)
    # Load model, model config and tokenizer via Transformers
    modelName = "bert-base-chinese" # 可以換成自己常用的
    custom_config = GPT2Config.from_pretrained('gpt2')
    custom_config.output_hidden_states = True
    custom_tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
    #custom_model = GPT2Model.from_pretrained('gpt2', config=custom_config)
    custom_model = AutoModel.from_pretrained(modelName, config=custom_config)

    model = Summarizer(
        custom_model=custom_model, 
        custom_tokenizer=custom_tokenizer,
        sentence_handler = SentenceHandler(language=Chinese)
        )
        

    r = requests.get("http://140.134.26.31:3000/api/process/getNews/20211215?$format=json", verify=False)
    list_of_dicts = r.json()
    print(type(r))
    print(type(list_of_dicts))


    for i in range(0,10000):
        body = list_of_dicts["data"][i]['Content']
        News_id = list_of_dicts["data"][i]['News_id']
        #result = model(body, max_length = 120, ratio = 0.2, num_sentences = 0)
        result = model(body, max_length = 150, ratio = 0.2, num_sentences = 0)
        full = ''. join(result)
        print(News_id)
        print()
        print(full) # 摘要出來的句子
        
        # 將資料加入 POST 請求中
        api_url = "http://140.134.26.31:3000/api/process/postSummary"
        todo = {'newsID':News_id, 'summary':full}
        response = requests.post(api_url, json=todo)
        response.json()

