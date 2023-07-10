const getRandomInt = (max, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;

const brainCalc = () => {
  let task;
  let result;
  const randomNumber1 = getRandomInt(100);
  const randomNumber2 = getRandomInt(100);
  switch (getRandomInt(3)) {
    case 1:
      task = `${randomNumber1} + ${randomNumber2}`;
      result = String(randomNumber1 + randomNumber2);
      break;
    case 2:
      result = String(randomNumber1 - randomNumber2);
      task = `${randomNumber1} - ${randomNumber2}`;
      break;
    default:
      task = `${randomNumber1} * ${randomNumber2}`;
      result = String(randomNumber1 * randomNumber2);
  }
  return [task, result];
};

export default brainCalc;
