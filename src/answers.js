export default function numbersWithEveness() {
  const result = [
    [[],[]],
    [[],[]],
    [[],[]]
  ];
  for(let i = 0; i < 3; i += 1) {
    result[i][0] = Math.round(Math.random() * 100);
    result[i][1] = result[i][0] % 2 === 0 ? 'yes' : 'no';
  }
  return result;
}

export function expressionsWithEquality() {
  const result = [
    [[],[]],
    [[],[]],
    [[],[]]
  ];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.round(Math.random() * 100);
    const randomNumber2 = + Math.round(Math.random() * 100);
    const mathSigns = ['+', '-', '*'];
    const randomSign = Math.floor(Math.random() * 3 + 1);
    switch (randomSign) {
      case 1:
        result[i][0] = randomNumber1 + ' + ' + randomNumber2;
        result[i][1] = String(randomNumber1 + randomNumber2);
        break;
      case 2:
        result[i][0] = randomNumber1 + ' - ' + randomNumber2;
        result[i][1] = String(randomNumber1 - randomNumber2);
        break;
      case 3:
        result[i][0] = randomNumber1 + ' * ' + randomNumber2;
        result[i][1] = String(randomNumber1 * randomNumber2);
        break;
    }
  }
  return result;
}