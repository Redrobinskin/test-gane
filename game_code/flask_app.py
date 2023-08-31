```python
from flask import Flask, render_template, request
from game_code import game_logic, game_models, game_views

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/play', methods=['POST'])
def play():
    game_data = request.form
    game_logic.process_game_data(game_data)
    return render_template('game.html', game_data=game_data)

@app.route('/debug')
def debug():
    debug_data = game_logic.get_debug_data()
    return render_template('debug.html', debug_data=debug_data)

if __name__ == '__main__':
    app.run(debug=True)
```