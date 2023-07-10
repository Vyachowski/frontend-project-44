import { getRandomInt } from '../tools.js';

const brainEven = () => {
  const task = getRandomInt(1000);
  const result = task % 2 === 0 ? 'yes' : 'no';
  return [task, result];
};

export default brainEven;
