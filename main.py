from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
import model
load_dotenv()
import os
import json

webApp = Flask(__name__, static_folder="front/build/static", template_folder="front/build")
api_key = os.getenv("ONLINE_KEY")
#@webApp.route('/')
def index():
  return render_template("index.html")#, nearStores = nearStores)

@webApp.route('/stores',methods=['GET'])
def stores():
  if request.method=='GET':
    if 'area' in request.args:
      nearStores = model.nearStores(api_key,request.args['area']) #y ahora :c?
    else:
      nearStores = model.nearStores(api_key)
    print(nearStores)
    return nearStores

@webApp.route('/mapspoint',methods=['GET'])
def maps():
  if request.method=='GET':
    return jsonify({"key":api_key}) #o json.dumps

@webApp.route('/addStore',methods=['POST'])
  if request.method=='POST':
    request.form['parametro1']
    request.form['parametro2']
    request.form['parametro3'] #ETCECTCTECTETCTECTETC

@webApp.route('/removeStore',methods=['GET'])


# src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
webApp.run(host='0.0.0.0', port=8080, debug=True)

print((model.getJsonStores(model.nearStores(api_key))))