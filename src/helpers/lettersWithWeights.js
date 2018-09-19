import companyNames from './companyNames';
import letters from './letters';

export const pureGetLettersWithWeights = ({ companyNames, letters }) => {
  const companyNamesLetters = companyNames
    .join('')
    .toLowerCase()
    .split('')
    .filter(letter => letters.includes(letter))

  const stats = companyNamesLetters.reduce((stats, letter) => {
    stats[letter] = typeof stats[letter] !== 'undefined' ? stats[letter] + 1 : 1;
    return stats;
  }, {});

  return letters.reduce((lettersWithWeights, letter) => {
    lettersWithWeights[letter] = typeof stats[letter] !== 'undefined' ? (stats[letter] * 1.0) / companyNamesLetters.length : 0;
    return lettersWithWeights;
  }, {});
}

const getLettersWithWeights = () => {
  return pureGetLettersWithWeights({
    companyNames,
    letters
  })
}

export default getLettersWithWeights;
