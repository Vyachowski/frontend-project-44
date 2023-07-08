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

export {
  getRandomInt,
  getCommonDiv,
  isPrime,
};
