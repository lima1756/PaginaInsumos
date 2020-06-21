from flask import Flask, render_template, request
from dotenv import load_dotenv
import model
load_dotenv()
import os
webApp = Flask(__name__, static_folder="front/build/static", template_folder="front/build")

@webApp.route('/')
def index():
  return render_template("index.html")
    
#const apiKey = os.getenv("MAPS_KEY")
##  se necesita un endpoint que sirva la key de maps obteneral con os.getenv("MAPS_KEY")
# aiuda alguien haga el endpoint del maps, o como se hace :'v haber dime y te ayudo :v


# src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KE Y&callback=initMap">
webApp.run(host='0.0.0.0', port=8080, debug=True)
