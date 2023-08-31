```python
import logging
from game_code.game_logic import GameLogic
from game_code.game_models import GameModels
from game_code.game_views import GameViews

logging.basicConfig(filename='game_debug.log', level=logging.DEBUG)

def debug_game():
    try:
        game_logic = GameLogic()
        game_models = GameModels()
        game_views = GameViews()

        logging.info('Initializing game logic, models, and views')

        game_logic.initialize()
        game_models.initialize()
        game_views.initialize()

        logging.info('Game logic, models, and views initialized successfully')

        logging.info('Starting game debug')

        game_logic.debug()
        game_models.debug()
        game_views.debug()

        logging.info('Game debug completed successfully')

    except Exception as e:
        logging.error('Error occurred: ' + str(e))

if __name__ == "__main__":
    debug_game()
```