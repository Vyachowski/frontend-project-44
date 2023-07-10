const getRandomInt = (max, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
const isPrime = (num) => {
  if (num % 1 || num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const brainPrime = () => {
  const task = getRandomInt(3571);
  const result = isPrime(task) ? 'yes' : 'no';
  return [task, result];
};

export default brainPrime;
