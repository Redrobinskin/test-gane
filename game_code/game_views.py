```python
from flask import Flask, render_template, request, redirect, url_for
from game_code.game_logic import GameLogic
from game_code.game_models import GameModel

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/start_game', methods=['POST'])
def start_game():
    game = GameLogic()
    game.start()
    return redirect(url_for('game'))

@app.route('/game')
def game():
    game = GameModel.query.get(1)
    return render_template('game.html', game=game)

@app.route('/move', methods=['POST'])
def move():
    game = GameLogic()
    move = request.form.get('move')
    game.make_move(move)
    return redirect(url_for('game'))

@app.route('/end_game')
def end_game():
    game = GameLogic()
    game.end()
    return redirect(url_for('home'))

if __name__ == "__main__":
    app.run(debug=True)
```