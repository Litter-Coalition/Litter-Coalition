from os import environ

from flask import session
from flask import redirect

from utils import requires_auth
from app import app
from utils import auth0

PROFILE_KEY = environ.get("PROFILE_KEY")
JWT_PAYLOAD = environ.get("JWT_PAYLOAD")
AUTH0_CALLBACK_URL = environ.get("AUTH0_CALLBACK_URL")


@app.route('/')
def index():
    return 'hello world'


@app.route('/login')
def login():
    return auth0.authorize_redirect(redirect_uri=AUTH0_CALLBACK_URL)


@app.route('/callback')
def callback_handling():
    auth0.authorize_access_token()
    resp = auth0.get('userinfo')
    userinfo = resp.json()

    session[JWT_PAYLOAD] = userinfo
    session[PROFILE_KEY] = {
        'user_id': userinfo['sub'],
        'name': userinfo['name'],
        'picture': userinfo['picture']
    }
    return redirect('/')


@app.route('/protected')
@requires_auth
def protected_route():
    return 'you are authenticated'
