import { getEmptyData, getRandomInt, isPrime } from '../tools.js';

const brainPrime = () => {
  const results = getEmptyData();
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(3571);
    results[i][0] = randomNumber;
    results[i][1] = isPrime(randomNumber) ? 'yes' : 'no';
  }
  results[3] = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return results;
};

export default brainPrime;
