// SERVICE FUNCTIONS
const getBlankResults = () => [[[], []], [[], []], [[], []]];
const getRandomInt = (max, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
const getCommonDiv = (a, b) => ((!b) ? a : getCommonDiv(b, a % b));
const isPrime = (num) => {
  if (num % 1 || num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

// GAME MECHANICS
const brainEven = () => {
  const results = getBlankResults();
  for (let i = 0; i < 3; i += 1) {
    results[i][0] = getRandomInt(1000);
    results[i][1] = results[i][0] % 2 === 0 ? 'yes' : 'no';
  }
  results[3] = 'Answer "yes" if the number is even, otherwise answer "no".';
  return results;
};

const brainCalc = () => {
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
  results[3] = 'What is the result of the expression?';
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
  results[3] = 'Find the greatest common divisor of given numbers.';
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
  results[3] = 'What number is missing in the progression?';
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
  results[3] = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return results;
};

export {
  brainEven,
  brainCalc,
  brainGcd,
  brainProgression,
  brainPrime,
};
