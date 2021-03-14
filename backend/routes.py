from os import environ

from flask import session
from flask import redirect
from flask import request
from flask import Response


from utils import requires_auth
from app import app
from utils import auth0
import models
from app import db

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


@app.route('/event', methods=["POST"])
@requires_auth
def event():
    # todo: check role of user to see if they are an organizer or admin
    if request.method == "POST":
        r = request.get_json()
        required_fields = ["name", "date", "url"]
        for field in required_fields:
            if not r.get(field):
                return {"error": "missing {} field".format(field)}, 400
        name = r.get("name")
        time = r.get("date")
        url = r.get("url")
        e = models.Event(name, time, url)
        db.session.add(e)
        db.session.commit()
        return {"event_id": e.id}


@app.route('/<zoom>/<x>/<y>.<tile_format>', methods=["GET"])
def tiles(zoom, x, y, tile_format):
    try:
        tile = models.Tile(zoom, x, y, tile_format)
    except ValueError as e:
        return {"error": "{}".format(e)}, 400
    try:
        envelope = tile.to_envelope()
        sql = tile.envelope_to_sql(envelope)
        pbf = tile.sql_to_pbf(sql)
        return Response(pbf, mimetype="application/vnd.mapbox-vector-tile")
    except:
        return {"error": "unknown error occurred"}, 500

