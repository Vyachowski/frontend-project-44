import readlineSync from 'readline-sync';
import welcome from './cli.js';

export default function gameEngine(gameData) {
  const name = welcome();
  console.log(gameData[3]);
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${gameData[i][0]}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer === gameData[i][1]) {
      console.log('Correct!');
    } else {
      return console.log(`Answer ${userAnswer} is wrong answer ;(. Correct answer was ${gameData[i][1]}. Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}
