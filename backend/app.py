from os import environ

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object("config.Config")
SECRET_KEY = environ.get("SECRET_KEY")
app.secret_key = SECRET_KEY
db = SQLAlchemy(app)

import routes

if __name__ == "__main__":
    app.run()
