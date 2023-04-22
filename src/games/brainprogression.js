import { getEmptyData, getRandomInt } from '../tools.js';

const brainProgression = () => {
  const results = getEmptyData();
  for (let i = 0; i < 3; i += 1) {
    const ariphmeticProgression = [getRandomInt(100)];
    const progressionRule = getRandomInt(20);
    for (let y = 1; y <= getRandomInt(10, 5); y += 1) {
      ariphmeticProgression[y] = ariphmeticProgression[y - 1] + progressionRule;
    }
    const hiddenNumberIndex = getRandomInt(ariphmeticProgression.length - 1);
    const hiddenNumber = ariphmeticProgression[hiddenNumberIndex];
    ariphmeticProgression[hiddenNumberIndex] = '..';
    results[i][0] = ariphmeticProgression.join(' ');
    results[i][1] = String(hiddenNumber);
  }
  results[3] = 'What number is missing in the progression?';
  return results;
};

export default brainProgression;
