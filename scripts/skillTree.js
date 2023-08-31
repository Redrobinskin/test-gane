```javascript
// Define the skill tree
let skillTree = {
  networkPenetration: {
    level: 0,
    maxLevel: 5,
    description: 'Improves your ability to penetrate network defenses',
  },
  socialEngineering: {
    level: 0,
    maxLevel: 5,
    description: 'Improves your ability to manipulate others',
  },
  codeInjection: {
    level: 0,
    maxLevel: 5,
    description: 'Improves your ability to inject malicious code',
  },
};

// Function to learn a new skill
function learnSkill(skillName) {
  let skill = skillTree[skillName];

  if (!skill) {
    console.log(`Unknown skill: ${skillName}`);
    return;
  }

  if (skill.level >= skill.maxLevel) {
    console.log(`You have already mastered ${skillName}`);
    return;
  }

  skill.level++;
  console.log(`You have improved your ${skillName} skill to level ${skill.level}`);

  // Emit skillAcquired event
  let event = new CustomEvent('skillAcquired', { detail: { skillName, level: skill.level } });
  document.dispatchEvent(event);
}

// Function to get the player's skill level
function getSkillLevel(skillName) {
  let skill = skillTree[skillName];

  if (!skill) {
    console.log(`Unknown skill: ${skillName}`);
    return 0;
  }

  return skill.level;
}

// Export the skill tree and functions
export { skillTree, learnSkill, getSkillLevel };
```