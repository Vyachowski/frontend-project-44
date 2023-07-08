import { getRandomInt, isPrime } from '../tools.js';

const brainPrime = () => {
  const task = getRandomInt(3571);
  const result = isPrime(task) ? 'yes' : 'no';
  return [task, result];
};

export default brainPrime;
