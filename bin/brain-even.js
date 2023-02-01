#!/usr/bin/env node
//IMPORT
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';
//MAIN VARIABLES
let answer;
let wrongAnswer = 0;
let score = 0;
const hiddenNumbers = threeNumbersWithEveness();
const name = welcome();
//MAIN LOGIC
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for(let i = 0; i < 3 && wrongAnswer < 1; i += 1) {
  console.log('Question: ' + hiddenNumbers[i][0]);
  answer = readlineSync.question('Your answer: ').toLowerCase();
  if (answer === hiddenNumbers[i][1]) {
    console.log('Correct!');
    score += 1;
  } else {
  console.log('Answer \'' + answer + '\' is wrong answer ;(. Correct answer was \'' + hiddenNumbers[i][1] + '\'. Let\'s try again, ' + name + '!');
  wrongAnswer += 1;
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
    result[i][0] = Math.round(Math.random() * 100);
    result[i][1] = result[i][0] % 2 === 0 ? 'yes' : 'no';
  }
  return result;
}
