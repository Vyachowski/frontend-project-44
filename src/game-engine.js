import { getUserName } from './cli.js';
import {
  displayRules,
  displayQuestion,
  displayDefeatMessage,
  getUserAnswer,
  getRightAnswer,
} from './game-engine-functions.js';

const gameEngine = (gameData) => {
  const roundToWin = 3;
  const name = getUserName();
  displayRules(gameData);
  for (let i = 0; i < roundToWin; i += 1) {
    displayQuestion(gameData, i);
    const userAnswer = getUserAnswer();
    const rightAnswer = getRightAnswer(gameData, i);
    if (userAnswer !== rightAnswer) {
      return displayDefeatMessage(userAnswer, rightAnswer, name);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
