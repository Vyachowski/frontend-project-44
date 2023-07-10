import { getUserName, readlineSync } from './tools.js';

const roundsToWin = 3;

const gameEngine = (question, roundRules) => {
  const userName = getUserName();

  console.log(`Hello, ${userName}!`);
  console.log(question);

  for (let currentRound = 0; currentRound < roundsToWin; currentRound += 1) {
    const [task, result] = roundRules[currentRound];
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const rightAnswer = result;
    if (userAnswer !== rightAnswer) {
      console.log(`Answer ${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export { gameEngine, roundsToWin };
