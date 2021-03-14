from os import environ
from functools import wraps

from flask import Flask

app = Flask(__name__)
SECRET_KEY = environ.get("SECRET_KEY")
app.secret_key = SECRET_KEY

import routes


app.run()
