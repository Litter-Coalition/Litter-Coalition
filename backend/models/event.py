from app import db


class Event(db.Model):
    __tablename__ = "event"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), unique=False, nullable=False)
    time = db.Column(db.Integer, nullable=False)
    url = db.Column(db.String(256), nullable=True)

    def __init__(self, name, time, url):
        self.name = name
        self.time = time
        self.url = url
