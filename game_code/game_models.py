```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(120), nullable=False)
    rating = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return '<Game %r>' % self.name

class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    score = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return '<Player %r>' % self.name
```