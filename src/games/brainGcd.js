import { getRandomInt } from '../tools.js';

const getCommonDiv = (a, b) => ((!b) ? a : getCommonDiv(b, a % b));

const brainGcd = () => {
  const randomNumber1 = getRandomInt(100);
  const randomNumber2 = getRandomInt(100);
  const task = `${randomNumber1} ${randomNumber2}`;
  const result = String(getCommonDiv(randomNumber1, randomNumber2));
  return [task, result];
};

export default brainGcd;
