const getBlankResults = () => [[[], []], [[], []], [[], []]];
const getRandomInt = (max, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
const getCommonDiv = (a, b) => {
  if (!b) {
    return a;
  }
  return getCommonDiv(b, a % b);
};
const isPrime = (num) => {
  if (num % 1 || num < 2) {
    return false;
  }
  const m = Math.sqrt(num);
  for (let i = 2; i <= m; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export {
  getBlankResults,
  getRandomInt,
  getCommonDiv,
  isPrime,
};
