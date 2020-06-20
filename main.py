from flask import Flask, render_template, request
webApp = Flask(__name__)
@webApp.route('/', methods=['GET', 'POST'])

