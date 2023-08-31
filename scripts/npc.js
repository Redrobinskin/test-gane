```javascript
// Importing shared dependencies
import { NpcSchema } from './schemas.js';
import { gameState } from './game.js';

// Array to store NPC objects
export let npcs = [];

// Function to create a new NPC
function createNPC(name, role, interaction) {
    let npc = new NpcSchema(name, role, interaction);
    npcs.push(npc);
}

// Function to interact with an NPC
function interactWithNPC(npcName) {
    let npc = npcs.find(npc => npc.name === npcName);
    if (npc) {
        npc.interaction();
    } else {
        console.log(`No NPC found with the name ${npcName}`);
    }
}

// Function to initialize NPCs
function initializeNPCs() {
    createNPC('Sarah', 'sysadmin', function() {
        console.log('Sarah: Hello, how can I assist you today?');
    });
    createNPC('AI-Security', 'security', function() {
        console.log('AI-Security: Intrusion detected. Initiating countermeasures.');
        gameState.intrusionDetected = true;
    });
}

// Exporting functions
export { createNPC, interactWithNPC, initializeNPCs };
```