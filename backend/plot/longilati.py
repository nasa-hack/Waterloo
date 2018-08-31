import pandas as pd
import numpy as np
import json

g1=pd.read_csv('extra/newdelhi.csv')
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
            
            
    keys=g2.head(0)
    keys=keys.columns.tolist() 
    jsonvalue=g2.iloc[[index]]
    site=g2['SITE_NAME']
    jsonsite=jsonvalue['SITE_NAME']
    str(jsonsite)
    site=site.tolist()
    #print(site)
    jsonvalue1=jsonvalue.values.tolist()
    for i in range(0,6):
        g1dict[keys[i]]= jsonvalue1[0][i]
        jsondumps=json.dumps(g1dict)
    print(jsonsite)
    #print(jsonvalue['SITE_NAME'])
    for j in range(0,289):
        if jsonsite==site[j]:
            jsonvalue=g2.iloc[[j]]
            jsonvalue1=jsonvalue.values.tolist()
            print(jsonvalue1)
                
#print(jsonvalue)
      
smallvalues(7.009,32.0987)


    
        
    
               

