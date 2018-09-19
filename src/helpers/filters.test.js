import { filterHashKeysByArrayOfKeys } from './filters';

describe('helpers/filters', () => {
  describe('filterHashKeysByArrayOfKeys', () => {
    it('filters properly', () => {
      const exampleHash = { a: 'A', b: 'B', c: 'C' };
      const exampleArray = ['a', 'c'];
      const filteredHash = { a: 'A', c: 'C' };
      expect(filterHashKeysByArrayOfKeys(exampleHash, exampleArray)).toEqual(filteredHash);
    })
  })
})
