import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const gameEngine = (game) => {
  const roundsToWin = 3;
  const userName = getUserName();
  console.log(game[3]);
  for (let currentRound = 0; currentRound < roundsToWin; currentRound += 1) {
    console.log(`Question: ${game[currentRound][0]}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const rightAnswer = game[currentRound][1];
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
