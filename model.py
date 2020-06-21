from mongoDB import data
import requests, json 

print("modeling")
url2 = "https://maps.googleapis.com/maps/api/place/textsearch/json?"
url = 'https://maps.googleapis.com/maps/api/geocode/json?'
api_key = "AIzaSyDS4huY82BgxX3GobtVBHnOWMhQn5vSeZ0"
#https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDS4huY82BgxX3GobtVBHnOWMhQn5vSeZ0
#https://maps.googleapis.com/maps/api/place/textsearch/json?query=farmacias+near+zapopan&key=AIzaSyDS4huY82BgxX3GobtVBHnOWMhQn5vSeZ0

def nearStores(api_key):
  nearStores = []
  names = []
  query = "farmacias+near+zapopan"
  request = requests.get(url2 + 'query=' + query + '&key=' + api_key)
  listRequest = request.json()
  results = listRequest['results']
  for i in range(len(results)):
    names.append(results[i]["name"])
  for name in names:
    x = data.stores.find_one({"storeId": name})
    if(x!=None):
      nearStores.append(x)
  return nearStores

def getCordenates (name, api_key):
  codenates = []
  place = requests.get(url + 'address=' + name + '&key=' + api_key)
  listRequest = place.json()
  results = listRequest['results'] 
  geometry = results[0]["geometry"]
  location = geometry["location"]
  codenates.append(location["lat"]) #lat
  codenates.append(location["lng"]) #lng
  print(codenates)
  return codenates

print(nearStores(api_key))