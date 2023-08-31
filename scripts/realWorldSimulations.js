// Importing shared dependencies
import { player, gameState, startChallenge, completeChallenge } from './main.js';

// Real-world simulation challenges
const realWorldChallenges = [
  {
    name: 'SQL Injection',
    description: 'Exploit a SQL injection vulnerability to retrieve sensitive data.',
    timeLimit: 60, // in seconds
    success: () => {
      completeChallenge('SQL Injection');
      gameState.storyProgress++;
    },
    failure: () => {
      // Handle failure scenario
    }
  },
  {
    name: 'Cross-Site Scripting',
    description: 'Perform a cross-site scripting attack to hijack user sessions.',
    timeLimit: 120, // in seconds
    success: () => {
      completeChallenge('Cross-Site Scripting');
      gameState.storyProgress++;
    },
    failure: () => {
      // Handle failure scenario
    }
  },
  // More challenges can be added here
];

// Function to start a real-world simulation challenge
function startRealWorldChallenge(challengeName) {
  const challenge = realWorldChallenges.find(c => c.name === challengeName);
  if (challenge) {
    startChallenge(challenge);
  } else {
    console.log(`Challenge ${challengeName} not found.`);
  }
}

// Exporting the function to be used in other modules
export { startRealWorldChallenge };