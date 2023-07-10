import { getRandomInt } from '../tools.js';

const brainCalc = () => {
  let task;
  let result;
  const randomNumber1 = getRandomInt(100);
  const randomNumber2 = getRandomInt(100);
  switch (getRandomInt(3, 1)) {
    case 1:
      task = `${randomNumber1} + ${randomNumber2}`;
      result = String(randomNumber1 + randomNumber2);
      break;
    case 2:
      result = String(randomNumber1 - randomNumber2);
      task = `${randomNumber1} - ${randomNumber2}`;
      break;
    case 3:
      task = `${randomNumber1} * ${randomNumber2}`;
      result = String(randomNumber1 * randomNumber2);
      break;
    default:
      throw new Error('Что-то сломалось... Пожалуйста, перезапустите игру.');
  }
  return [task, result];
};

export default brainCalc;
