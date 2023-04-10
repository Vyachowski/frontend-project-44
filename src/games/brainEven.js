import { getEmptyData, getRandomInt } from '../functions.js';

const brainEven = () => {
  const results = getEmptyData();
  for (let i = 0; i < 3; i += 1) {
    results[i][0] = getRandomInt(1000);
    results[i][1] = results[i][0] % 2 === 0 ? 'yes' : 'no';
  }
  results[3] = 'Answer "yes" if the number is even, otherwise answer "no".';
  return results;
};

export default brainEven;
