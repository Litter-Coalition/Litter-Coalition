from functools import wraps
from os import environ

from authlib.integrations.flask_client import OAuth
from flask import session

from app import app

oauth = OAuth(app)

AUTH0_CALLBACK_URL = environ.get("AUTH0_CALLBACK_URL")
AUTH0_CLIENT_ID = environ.get("AUTH0_CLIENT_ID")
AUTH0_CLIENT_SECRET = environ.get("AUTH0_CLIENT_SECRET")
AUTH0_DOMAIN = environ.get("AUTH0_DOMAIN")
AUTH0_BASE_URL = 'https://' + AUTH0_DOMAIN
PROFILE_KEY = environ.get("PROFILE_KEY")
JWT_PAYLOAD = environ.get("JWT_PAYLOAD")
SECRET_KEY = environ.get("SECRET_KEY")

auth0 = oauth.register(
    'auth0',
    client_id=AUTH0_CLIENT_ID,
    client_secret=AUTH0_CLIENT_SECRET,
    api_base_url=AUTH0_BASE_URL,
    access_token_url=AUTH0_BASE_URL + '/oauth/token',
    authorize_url=AUTH0_BASE_URL + '/authorize',
    client_kwargs={
        'scope': 'openid profile email',
    },
)


def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if PROFILE_KEY not in session:
            return {"error": "authentication issue"}, 401
        return f(*args, **kwargs)

    return decorated
