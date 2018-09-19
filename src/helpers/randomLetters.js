import { randomElementFromHashWithWeights } from './random';
import { softLetters, hardLetters } from './letters';
import getLettersWithWeights from './lettersWithWeights';
import { filterHashKeysByArrayOfKeys } from './filters';

const lettersWithWeights = getLettersWithWeights();

export const randomLetter = () => randomElementFromHashWithWeights(lettersWithWeights);
export const randomSoftLetter = () => randomElementFromHashWithWeights(filterHashKeysByArrayOfKeys(lettersWithWeights, softLetters));
export const randomHardLetter = () => randomElementFromHashWithWeights(filterHashKeysByArrayOfKeys(lettersWithWeights, hardLetters));
