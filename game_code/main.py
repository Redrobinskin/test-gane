```python
from flask import Flask
from game_code import flask_app, game_logic, game_views, game_models, game_tests, game_debug

app = Flask(__name__)

# Importing the game logic
game_logic.init_game()

# Importing the game models
game_models.init_models()

# Importing the game views
game_views.init_views(app)

# Importing the Flask app
flask_app.init_app(app)

# Running the game tests
game_tests.run_tests()

# Running the game debug
game_debug.run_debug()

if __name__ == "__main__":
    app.run(debug=True)
```