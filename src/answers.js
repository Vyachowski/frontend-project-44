export default function threeNumbersWithEveness() {
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

export default function threeNumbersWithEveness() {
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