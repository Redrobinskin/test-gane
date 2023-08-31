```python
from game_code.game_models import GameModel

class GameLogic:
    def __init__(self):
        self.game_model = GameModel()

    def start_game(self):
        self.game_model.initialize_game()

    def play_turn(self, player, action):
        result = self.game_model.process_action(player, action)
        return result

    def check_game_over(self):
        return self.game_model.is_game_over()

    def get_winner(self):
        return self.game_model.get_winner()

    def get_score(self):
        return self.game_model.get_score()
```