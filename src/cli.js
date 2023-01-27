import readlineSync from 'readline-sync';

const name = readlineSync.question('Your answer: ');

console.log('Hello, ' + name + '!');