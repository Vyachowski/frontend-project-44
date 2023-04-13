import { getEmptyData, getRandomInt } from './game-data-functions.js';

const brainCalc = () => {
  const results = getEmptyData();
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomInt(100);
    const randomNumber2 = getRandomInt(100);
    const sumToString = (num1, num2) => String(num1 + num2);
    const subtractToString = (num1, num2) => String(num1 - num2);
    const multiplyToString = (num1, num2) => String(num1 * num2);
    switch (getRandomInt(3)) {
      case 1:
        results[i][0] = `${randomNumber1} + ${randomNumber2}`;
        results[i][1] = sumToString(randomNumber1, randomNumber2);
        break;
      case 2:
        results[i][0] = `${randomNumber1} - ${randomNumber2}`;
        results[i][1] = subtractToString(randomNumber1, randomNumber2);
        break;
      default:
        results[i][0] = `${randomNumber1} * ${randomNumber2}`;
        results[i][1] = multiplyToString(randomNumber1, randomNumber2);
    }
  }
  results[3] = 'What is the result of the expression?';
  return results;
};

export default brainCalc;
