import { getEmptyData, getRandomInt } from '../tools.js';

const brainCalc = () => {
  const results = getEmptyData();
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomInt(100);
    const randomNumber2 = getRandomInt(100);
    switch (getRandomInt(3)) {
      case 1:
        results[i][0] = `${randomNumber1} + ${randomNumber2}`;
        results[i][1] = String(randomNumber1 + randomNumber2);
        break;
      case 2:
        results[i][1] = String(randomNumber1 - randomNumber2);
        results[i][0] = `${randomNumber1} - ${randomNumber2}`;
        break;
      default:
        results[i][0] = `${randomNumber1} * ${randomNumber2}`;
        results[i][1] = String(randomNumber1 * randomNumber2);
    }
  }
  results[3] = 'What is the result of the expression?';
  return results;
};

export default brainCalc;
