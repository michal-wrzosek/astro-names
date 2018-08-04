const soft = ['a', 'e', 'i', 'o', 'u', 'y'];
const hard = [
  'b',
  'c',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'n',
  'p',
  'q',
  'r',
  's',
  't',
  'w',
  'x',
  'z',
  'sh',
  'ch'
];

const randomNumberFromRange = (a, b) => a + Math.round(Math.random() * (b - a));
const randomSoft = () => soft[randomNumberFromRange(0, soft.length - 1)];
const randomHard = () => hard[randomNumberFromRange(0, hard.length - 1)];

const generate = () => {
  const length = randomNumberFromRange(2, 7);

  let word = '';
  let hardCount = 0;

  for (let i = 0; i < length; i++) {
    if (hardCount === 2 || Math.random() > 0.5) {
      word += randomSoft();
      hardCount = 0;
    } else {
      word += randomHard();
      hardCount++;
    }
  }

  return word;
};

export default generate;
