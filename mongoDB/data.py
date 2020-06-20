import pymongo

client = pymongo.MongoClient("mongodb+srv://tec:100@cluster0-rmunm.mongodb.net/dataBase?retryWrites=true&w=majority")
dataBase = client["dataBase"]
stores = dataBase.store
testList =[
  {
  "storeId": 2345 , "address" : "gdl" , "maskType" : "K95", "quantity": 3 
  }
] 
x = stores.insert_many(testList)

