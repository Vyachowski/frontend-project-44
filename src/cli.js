import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!\nMay I have your name?');
const getName = () => readlineSync.question('Your answer: ');
const displayName = (name) => console.log(`Hello, ${name}!`);

export { welcome, getName, displayName };
