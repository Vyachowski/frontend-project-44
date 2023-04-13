import { getEmptyData, getRandomInt } from './game-data-functions.js';

const brainCalc = () => {
  const results = getEmptyData();
  const sum = (num1, num2) => num1 + num2;
  const subtract = (num1, num2) => num1 - num2;
  const multiply = (num1, num2) => num1 * num2;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomInt(100);
    const randomNumber2 = getRandomInt(100);
    switch (getRandomInt(3)) {
      case 1:
        results[i][0] = sum(randomNumber1, randomNumber2);
        results[i][1] = String(randomNumber1 + randomNumber2);
        break;
      case 2:
        results[i][0] = subtract(randomNumber1, randomNumber2);
        results[i][1] = String(randomNumber1 - randomNumber2);
        break;
      default:
        results[i][0] = multiply(randomNumber1, randomNumber2);
        results[i][1] = String(randomNumber1 * randomNumber2);
    }
  }
  results[3] = 'What is the result of the expression?';
  return results;
};

export default brainCalc;
