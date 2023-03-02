import readlineSync from 'readline-sync';
import welcome from './cli.js';

export default function gameEngine(gameRule, answers) {
  //  Variables
  let userAnswer = '';
  let score = 0;
  let defeat = false;
  const name = welcome();
  //  Main Logic
  console.log(gameRule);
  for (let i = 0; i < 3 && defeat === false; i += 1) {
    console.log(`Question: ${answers[i][0]}`);
    userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer === answers[i][1]) {
      console.log('Correct!');
      score += 1;
    } else {
      defeat = true;
      return console.log(`Answer ${userAnswer} is wrong answer ;(. Correct answer was ${answers[i][1]}. Let's try again, ${name}!`);
    }
  }
  return score === 3 ? console.log(`Congratulations, ${name}!`) : false;
}
