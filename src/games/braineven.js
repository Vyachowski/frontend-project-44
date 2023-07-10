const getRandomInt = (max, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;

const brainEven = () => {
  const task = getRandomInt(1000);
  const result = task % 2 === 0 ? 'yes' : 'no';
  return [task, result];
};

export default brainEven;
