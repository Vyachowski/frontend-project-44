#!/usr/bin/env node
//IMPORT
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';
//MAIN VARIABLES
let answer;
let score = 0;
const numbers = threeNumbersWithEveness();
const name = welcome();
//MAIN LOGIC
for(let i = 0; i < 3; i += 1) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ' + numbers[i][0]);
  answer = readlineSync.question('Your answer: ').toLowerCase();
  if (answer === numbers[i][1]) {
    console.log('Correct!');
    score += 1;
  } else {
  console.log('Answer \'' + answer + '\' is wrong answer ;(. Correct answer was \'' + numbers[i][1] + '\'. Let\'s try again, ' + name);
  break
  }
}
score === 3 ? console.log('Congratulations, ' + name + '!') : false;
//FUNCTIONS
function threeNumbersWithEveness() {
  const result = [
    [[],[]],
    [[],[]],
    [[],[]]
  ];
  for(let i = 0; i < 3; i += 1) {
    result[i][0] = randomRoundNumber(1, 999);
    result[i][1] = result[i][0] % 2 === 0 ? 'yes' : 'no';
  }
  return result;
}

function randomRoundNumber(min, max) {
  return  Math.round(Math.random() * (max - min) + min);
}
