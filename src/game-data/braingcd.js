import { getEmptyData, getRandomInt, getCommonDiv } from './game-data-functions.js';

const brainGcd = () => {
  const results = getEmptyData();
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomInt(100);
    const randomNumber2 = getRandomInt(100);
    results[i][0] = `${randomNumber1} ${randomNumber2}`;
    results[i][1] = String(getCommonDiv(randomNumber1, randomNumber2));
  }
  results[3] = 'Find the greatest common divisor of given numbers.';
  return results;
};

export default brainGcd;
