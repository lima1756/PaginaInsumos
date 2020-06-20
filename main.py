from flask import Flask, render_template, request
from dotenv import load_dotenv
load_dotenv()
from mongoDB import data
webApp = Flask(__name__)

## Para servir el front, servir /front/build/index.html
## se necesita un endpoint que sirva la key de maps
##### almacenar esa key en el .env y obteneral con os.getenv("MAPS_KEY")
