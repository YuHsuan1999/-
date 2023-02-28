from ckip_transformers.nlp import CkipWordSegmenter, CkipPosTagger, CkipNerChunker
import requests

def tokenGotten():
    #工具分為三個等級（1—3）。等級一最快，等級三（預設值）最精準。
    ws_driver  = CkipWordSegmenter(level=3)
    pos_driver = CkipPosTagger(level=3)
    ner_driver = CkipNerChunker(level=3)

    #可於宣告斷詞等工具時指定 device 以使用 GPU，設為 -1 （預設值）代表不使用 GPU。
    ws_driver = CkipWordSegmenter(device=-1)

    r = requests.get("http://140.134.26.31:3000/api/process/getNews/20211023?$format=json", verify=False)
    list_of_dicts = r.json()
    print(type(r))
    print(type(list_of_dicts))



    for i in range(0,500):
    
        text = list_of_dicts["data"][i]['Content']
        text = [str(text)]
        News_id = list_of_dicts["data"][i]['News_id']
        Provenance = list_of_dicts["data"][i]['Provenance']
        Provenance = str(Provenance)
        print(type(News_id))
        print(type(Provenance))
        print(News_id)
        print(Provenance)

        
        # Run pipeline
        ws  = ws_driver(text)
        pos = pos_driver(ws)
        ner = ner_driver(text)

        # Enable sentence segmentation
        ws  = ws_driver(text, use_delim=True)
        ner = ner_driver(text, use_delim=True)

        # Disable sentence segmentation
        pos = pos_driver(ws, use_delim=False)

        # Use new line characters and tabs for sentence segmentation
        pos = pos_driver(ws, delim_set='\n\t')

        # Sets the batch size and maximum sentence length
        ws = ws_driver(text, batch_size=256, max_length=500)

        # Pack word segmentation and part-of-speech results
        def pack_ws_pos_sentece(sentence_ws, sentence_pos):
            assert len(sentence_ws) == len(sentence_pos)
            res = []
            for word_ws, word_pos in zip(sentence_ws, sentence_pos):
                res.append(f'{word_ws}({word_pos})')
            return '\u3000'.join(res)

        # Show results
        for sentence, sentence_ws, sentence_pos, sentence_ner in zip(text, ws, pos, ner):
        # print(sentence)
        # print(pack_ws_pos_sentece(sentence_ws, sentence_pos))

            for entity in sentence_ner:
                if (entity[1] == 'DATE' or entity[1] == 'TIME' or entity[1] =='CARDINAL' or 
                    entity[1] =='MONEY' or entity[1] =='PERCENT' or entity[1] =='ORDINAL'or entity[1] =='QUANTITY'): 
                    continue
                Keyword= str(entity[0])
                api_url = "http://140.134.26.31:3000/api/keyword/postKeyword"
                todo = {'newsID':News_id,'provenance':Provenance,'keyword':Keyword}
                response = requests.post(api_url, json=todo)
                response.json()
                print(entity)