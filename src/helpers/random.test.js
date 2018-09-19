import {
  randomNumberFromRangePureFunc,
  randomFloatFromRangePureFunc,
  randomElementFromHashWithWeightsPureFunc
} from './random';

describe('helpers/random', () => {
  describe('randomNumberFromRangePureFunc', () => {
    it('returns random number from range', () => {
      let a = 0;
      let b = 10;
      let random = () => 0.33;
      expect(randomNumberFromRangePureFunc(a, b, { random })).toEqual(3);
    })
  });
  describe('randomFloatFromRangePureFunc', () => {
    it('returns random float from range', () => {
      let a = 0;
      let b = 10;
      let random = () => 0.33;
      expect(randomFloatFromRangePureFunc(a, b, { random })).toEqual(3.3);
    })
  });
  describe('randomElementFromHashWithWeightsPureFunc', () => {
    it('returns correct element of hash', () => {
      const hash = { b: 0.5, a: 0.5, c: 1 };
      let randomFloatFromRange = () => 0;
      expect(randomElementFromHashWithWeightsPureFunc(hash, { randomFloatFromRange })).toEqual('a');
      randomFloatFromRange = () => 0.6;
      expect(randomElementFromHashWithWeightsPureFunc(hash, { randomFloatFromRange })).toEqual('b');
      randomFloatFromRange = () => 2;
      expect(randomElementFromHashWithWeightsPureFunc(hash, { randomFloatFromRange })).toEqual('c');
    })
  });
});
