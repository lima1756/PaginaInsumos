import pymongo
import dns

print("dataing!")
client = pymongo.MongoClient("mongodb+srv://tec:100@cluster0-rmunm.mongodb.net/dataBase?retryWrites=true&w=majority")
dataBase = client.insumos
stores = dataBase.store


def agregarTienda(storeID, adress, lat, lon, inventory):
  stores.insert_one({
    "storeId": storeID , 
    "address" : adress, 
    "lat": lat,
    "long" : lon,
    "inventory" : {"maskType": inventory[0],"quantity": inventory[1],"price":inventory[2]}
    })

def quitarTienda(name):
  tienda = tiendaInfo(name)
  idObject = tienda[0]
  return stores.delete_one({"_id" : idObject})

def tiendaInfo(name):
  return stores.find({"storeID": "name"})


