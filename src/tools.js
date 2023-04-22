import readlineSync from 'readline-sync';

const getEmptyData = () => [[[], []], [[], []], [[], []]];
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

const getUserAnswer = () => readlineSync.question('Your answer: ').toLowerCase();
const getRightAnswer = (gameData, num) => gameData[num][1];
const displayRules = (gameData) => console.log(gameData[3]);
const displayQuestion = (gameData, num) => console.log(`Question: ${gameData[num][0]}`);
const displayDefeatMessage = (userAnswer, rightAnswer, name) => console.log(`Answer ${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`);

export {
  displayRules,
  displayQuestion,
  displayDefeatMessage,
  getUserAnswer,
  getRightAnswer,
  getEmptyData,
  getRandomInt,
  getCommonDiv,
  isPrime,
};

