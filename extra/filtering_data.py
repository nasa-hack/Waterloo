import pandas as pd
import json

#f = json.loads(open('./ground_water_quality.json').read())
#print(f)

#print(data.head)

class Data:
    def __init__(self, data , desc=''):
        self.data = data
        self.desc = desc

Datas = [
    Data(pd.read_csv('./data.csv', sep='\t'), "Yearly precipetition on the given area given by address"),
    Data(pd.read_csv('./gr_water_quality.csv'), "Ground water quality of various places")
]


    