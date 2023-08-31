```javascript
// Import shared dependencies
import { player, gameState, startChallenge } from './main.js';

// Define post-game challenges
const postGameChallenges = [
  {
    id: 'pgc1',
    title: 'The Ghost in the Machine',
    description: 'Investigate a mysterious anomaly in the system.',
    difficulty: 'Hard',
    reward: 'Ghost Protocol',
  },
  // More challenges...
];

// Function to unlock post-game content
function unlockPostGameContent() {
  if (gameState.mainStoryCompleted) {
    gameState.postGameUnlocked = true;
    console.log('Post-game content unlocked! New challenges await...');
  }
}

// Function to start a post-game challenge
function startPostGameChallenge(challengeId) {
  if (!gameState.postGameUnlocked) {
    console.log('Complete the main storyline to unlock post-game content.');
    return;
  }

  const challenge = postGameChallenges.find(c => c.id === challengeId);
  if (!challenge) {
    console.log('Challenge not found.');
    return;
  }

  startChallenge(challenge);
}

// Function to list post-game challenges
function listPostGameChallenges() {
  if (!gameState.postGameUnlocked) {
    console.log('Complete the main storyline to unlock post-game content.');
    return;
  }

  console.log('Post-Game Challenges:');
  postGameChallenges.forEach(c => {
    console.log(`${c.title} - ${c.description}`);
  });
}

// Export functions
export { unlockPostGameContent, startPostGameChallenge, listPostGameChallenges };
```