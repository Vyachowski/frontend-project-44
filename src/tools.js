import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomInt = (max, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;

export { getUserName, readlineSync, getRandomInt };
