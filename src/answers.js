import {
  getBlankResults,
  getRandomInt,
  getCommonDiv,
  isPrime,
} from './service-functions.js';

const numbersWithEveness = () => {
  const results = getBlankResults();
  for (let i = 0; i < 3; i += 1) {
    results[i][0] = getRandomInt(1000);
    results[i][1] = results[i][0] % 2 === 0 ? 'yes' : 'no';
  }
  return results;
};

const expressionsWithEquality = () => {
  const results = getBlankResults();
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomInt(100);
    const randomNumber2 = getRandomInt(100);
    switch (getRandomInt(3)) {
      case 1:
        results[i][0] = `${randomNumber1} + ${randomNumber2}`;
        results[i][1] = String(randomNumber1 + randomNumber2);
        break;
      case 2:
        results[i][0] = `${randomNumber1} - ${randomNumber2}`;
        results[i][1] = String(randomNumber1 - randomNumber2);
        break;
      default:
        results[i][0] = `${randomNumber1} * ${randomNumber2}`;
        results[i][1] = String(randomNumber1 * randomNumber2);
    }
  }
  return results;
};

const brainGcd = () => {
  const results = getBlankResults();
  // eslint-disable-next-line no-restricted-syntax
  for (const result of results) {
    const randomNumber1 = getRandomInt(100);
    const randomNumber2 = getRandomInt(100);
    result[0] = `${randomNumber1} ${randomNumber2}`;
    result[1] = String(getCommonDiv(randomNumber1, randomNumber2));
  }
  return results;
};

const brainProgression = () => {
  const results = getBlankResults();
  // eslint-disable-next-line no-restricted-syntax
  for (const result of results) {
    const ariphmeticProgression = [getRandomInt(100)];
    const progressionRule = getRandomInt(20);
    for (let i = 1; i <= getRandomInt(10, 5); i += 1) {
      ariphmeticProgression[i] = ariphmeticProgression[i - 1] + progressionRule;
    }
    const hiddenNumberIndex = getRandomInt(ariphmeticProgression.length - 1);
    const hiddenNumber = ariphmeticProgression[hiddenNumberIndex];
    ariphmeticProgression[hiddenNumberIndex] = '..';
    result[0] = ariphmeticProgression.join(' ');
    result[1] = String(hiddenNumber);
  }
  return results;
};

const brainPrime = () => {
  const results = getBlankResults();
  // eslint-disable-next-line no-restricted-syntax
  for (const result of results) {
    const randomNumber = getRandomInt(3571);
    result[0] = randomNumber;
    result[1] = isPrime(randomNumber) ? 'yes' : 'no';
  }
  return results;
};

export {
  numbersWithEveness,
  expressionsWithEquality,
  brainGcd,
  brainProgression,
  brainPrime,
};
