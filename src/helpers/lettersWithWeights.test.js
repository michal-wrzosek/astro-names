import { pureGetLettersWithWeights } from './lettersWithWeights';

describe('helpers/lettersWithWeights', () => {
  it('returns letters with weights', () => {
    const letters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g'
    ];
    const companyNames = [
      'ab Cd',
      'ee ff ąść'
    ];
    const lettersWithWeightsArray = {
      a: 1 / 8 * 1.0,
      b: 1 / 8 * 1.0,
      c: 1 / 8 * 1.0,
      d: 1 / 8 * 1.0,
      e: 2 / 8 * 1.0,
      f: 2 / 8 * 1.0,
      g: 0
    };
    expect(pureGetLettersWithWeights({ companyNames, letters })).toEqual(lettersWithWeightsArray);
  })
});
