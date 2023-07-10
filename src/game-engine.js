import { getUserName, readlineSync } from './cli.js';

const gameEngine = (question, roundRules) => {
  const roundsToWin = 3;
  const userName = getUserName();
  console.log(question);
  for (let currentRound = 0; currentRound < roundsToWin; currentRound += 1) {
    const [task, result] = roundRules[currentRound];
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const rightAnswer = result;
    if (userAnswer !== rightAnswer) {
      console.log(`Answer ${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default gameEngine;
