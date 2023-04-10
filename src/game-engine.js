import { welcome, getName, displayName } from './cli.js';
import {
  displayRules,
  displayQuestion,
  displayDefeat,
  getAnswer,
  getRightAnswer,
} from './game-engine-functions.js';

const gameEngine = (gameData) => {
  welcome();
  const name = getName();
  displayName(name);
  displayRules(gameData);
  for (let i = 0; i < 3; i += 1) {
    displayQuestion(gameData, i);
    const userAnswer = getAnswer();
    const rightAnswer = getRightAnswer(gameData, i);
    if (userAnswer !== rightAnswer) {
      return displayDefeat(userAnswer, rightAnswer, name);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
