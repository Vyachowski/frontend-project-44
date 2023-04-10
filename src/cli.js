import readlineSync from 'readline-sync';

const displayGreeting = () => console.log('Welcome to the Brain Games!\nMay I have your name?');
const displayName = (name) => console.log(`Hello, ${name}!`);
const getName = () => readlineSync.question('Your answer: ');

export { displayGreeting, displayName, getName };
