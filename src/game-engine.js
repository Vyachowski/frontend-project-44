import readlineSync from 'readline-sync';

// Game engine
const getUserName = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

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

// Service functions
const getRandomInt = (max, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
const getCommonDiv = (a, b) => ((!b) ? a : getCommonDiv(b, a % b));
const isPrime = (num) => {
  if (num % 1 || num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export {
  getRandomInt,
  getCommonDiv,
  isPrime,
  getUserName,
};

export default gameEngine;
