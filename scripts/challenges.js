```javascript
// Importing shared dependencies
import { player, gameState, ChallengeSchema } from './main.js';

// Array to store all challenges
let challenges = [];

// Function to start a new challenge
function startChallenge(challengeId) {
    let challenge = challenges.find(ch => ch.id === challengeId);
    if (!challenge) {
        console.error(`Challenge with id ${challengeId} not found.`);
        return;
    }

    // Set the challenge as active
    gameState.activeChallenge = challenge;

    // Start the timer for time-limited challenges
    if (challenge.timeLimit) {
        challenge.timer = setTimeout(() => {
            completeChallenge(challengeId, false);
        }, challenge.timeLimit * 1000);
    }
}

// Function to complete a challenge
function completeChallenge(challengeId, success) {
    let challenge = challenges.find(ch => ch.id === challengeId);
    if (!challenge) {
        console.error(`Challenge with id ${challengeId} not found.`);
        return;
    }

    // Clear the timer if it exists
    if (challenge.timer) {
        clearTimeout(challenge.timer);
        challenge.timer = null;
    }

    // Update the game state based on the success of the challenge
    if (success) {
        gameState.completedChallenges.push(challengeId);
        console.log(`Challenge ${challengeId} completed successfully.`);
    } else {
        console.log(`Challenge ${challengeId} failed.`);
    }

    // Reset the active challenge
    gameState.activeChallenge = null;
}

// Function to load challenges from a data file
function loadChallenges(data) {
    challenges = data.map(ch => new ChallengeSchema(ch));
}

export { startChallenge, completeChallenge, loadChallenges };
```