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
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomInt(100);
    const randomNumber2 = getRandomInt(100);
    results[i][0] = `${randomNumber1} ${randomNumber2}`;
    results[i][1] = String(getCommonDiv(randomNumber1, randomNumber2));
  }
  results[3] = 'Find the greatest common divisor of given numbers.';
  return results;
};

const brainProgression = () => {
  const results = getBlankResults();
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

const brainPrime = () => {
  const results = getBlankResults();
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(3571);
    results[i][0] = randomNumber;
    results[i][1] = isPrime(randomNumber) ? 'yes' : 'no';
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
