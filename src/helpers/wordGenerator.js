import { randomNumberFromRange } from './random';
import { randomSoftLetter, randomHardLetter } from './randomLetters';

const generate = () => {
  const length = randomNumberFromRange(4, 8);

  let word = '';
  let softCount = 0;
  let hardCount = 0;

  for (let i = 0; i < length; i++) {
    if (
      softCount !== 2 &&
      (hardCount === 2 || Math.random() > 0.5)
    ) {
      word += randomSoftLetter();
      softCount++;
      hardCount = 0;
    } else {
      word += randomHardLetter();
      softCount = 0;
      hardCount++;
    }
  }

  return word;
};

export default generate;
