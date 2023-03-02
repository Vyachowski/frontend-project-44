import readlineSync from 'readline-sync';
import welcome from './cli.js';

export default function gameEngine(gameRule, answers) {
  const name = welcome();
  console.log(gameRule);
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${answers[i][0]}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer === answers[i][1]) {
      console.log('Correct!');
    } else {
      return console.log(`Answer ${userAnswer} is wrong answer ;(. Correct answer was ${answers[i][1]}. Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}
