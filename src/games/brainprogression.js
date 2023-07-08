import { getRandomInt } from '../game-engine.js';

const brainProgression = () => {
  const ariphmeticProgression = [getRandomInt(100)];
  const progressionRule = getRandomInt(20);
  for (let y = 1; y <= getRandomInt(10, 5); y += 1) {
    ariphmeticProgression[y] = ariphmeticProgression[y - 1] + progressionRule;
  }
  const hiddenNumberIndex = getRandomInt(ariphmeticProgression.length - 1);
  const hiddenNumber = ariphmeticProgression[hiddenNumberIndex];
  ariphmeticProgression[hiddenNumberIndex] = '..';
  const task = ariphmeticProgression.join(' ');
  const result = String(hiddenNumber);
  return [task, result];
};

export default brainProgression;
