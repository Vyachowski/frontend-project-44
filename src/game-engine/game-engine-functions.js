import readlineSync from 'readline-sync';

const getAnswer = () => readlineSync.question('Your answer: ').toLowerCase();
const getRightAnswer = (gameData, num) => gameData[num][1];
const displayRules = (gameData) => console.log(gameData[3]);
const displayQuestion = (gameData, num) => console.log(`Question: ${gameData[num][0]}`);
const displayDefeatMessage = (userAnswer, rightAnswer, name) => console.log(`Answer ${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`);

export {
  displayRules,
  displayQuestion,
  displayDefeatMessage,
  getAnswer,
  getRightAnswer,
};
