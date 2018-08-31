import pandas as pd
import numpy as np
import json

g1=pd.read_csv('plot/extra/newdelhi.csv')
g2=g1.iloc[:,3:]
longi=[]
lati=[]
jsonvalue=[]
keys=[]
g1dict={}
#print(g1.columns)
df = pd.DataFrame()
df['col'] = g1.columns

#print(df)
longi = g1["LON"].tolist()
lati = g1["LAT"].tolist()

def smallvalues(lat,lon):
    small=0
    reqd=lati[0]
    index=0
    for i in range(0,289):
        small=abs(lati[i]-lat)
        if small<reqd:
            reqd=small
            index=i
    #reqdvalues(index)
    keys=g2.head(0)
    keys=keys.columns.tolist()
    jsonvalue=g2.iloc[[index]]
    jsonvalue=jsonvalue.values.tolist()
    for i in range(0,6):
        g1dict[keys[i]]= jsonvalue[0][i]
    jsondumps=json.dumps(g1dict)
    return(jsondumps)   
      
smallvalues(7.009,32.0987)


    
        
    
               

