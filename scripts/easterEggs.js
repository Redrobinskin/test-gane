```javascript
// Import shared dependencies
import { player, gameState } from './main.js';

// Define easter eggs
const easterEggs = [
  {
    code: 'sudo make me a sandwich',
    action: () => {
      player.inventory.push({ name: 'Sandwich', description: 'A delicious sandwich.' });
      console.log('A sandwich appears in your inventory.');
    }
  },
  {
    code: 'rm -rf /',
    action: () => {
      console.log('Nice try! But this command is disabled in this game.');
    }
  },
  // Add more easter eggs here...
];

// Function to check for easter eggs
export function checkForEasterEgg(input) {
  const easterEgg = easterEggs.find(egg => egg.code === input);
  if (easterEgg) {
    easterEgg.action();
    return true;
  }
  return false;
}

// Function to handle terminal input
export function handleTerminalInput(input) {
  if (!checkForEasterEgg(input)) {
    // Handle normal terminal input...
  }
}
```