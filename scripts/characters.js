```javascript
// Importing shared dependencies
import { NpcSchema } from './schemas.js';
import { npcs } from './main.js';

// Character class
class Character {
  constructor(name, role, intelligence, strength) {
    this.name = name;
    this.role = role;
    this.intelligence = intelligence;
    this.strength = strength;
  }

  interact(player) {
    // Interaction logic goes here
  }
}

// NPC class
class NPC extends Character {
  constructor(name, role, intelligence, strength, interaction) {
    super(name, role, intelligence, strength);
    this.interaction = interaction;
  }

  interact(player) {
    this.interaction(player);
  }
}

// Creating NPCs
const sysAdmin = new NPC('SysAdmin', 'admin', 90, 50, player => {
  // Interaction logic for SysAdmin
});

const aiSecurity = new NPC('AISecurity', 'security', 100, 100, player => {
  // Interaction logic for AISecurity
});

// Adding NPCs to the npcs array
npcs.push(sysAdmin, aiSecurity);
```