const { flatten, flattenDeep } = require('./array-flatten-utils.js');

describe('Array Flatten Utilities', () => {
  describe('flatten', () => {
    it('should flatten an array a single level deep', () => {
      const nested = [1, [2, 3], [4, [5]]];
      expect(flatten(nested)).toEqual([1, 2, 3, 4, [5]]);
    });

    it('should not change an already flat array', () => {
      const flat = [1, 2, 3, 4, 5];
      expect(flatten(flat)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle empty arrays', () => {
      expect(flatten([])).toEqual([]);
      expect(flatten([[], []])).toEqual([]);
    });

    it('should handle various data types', () => {
      const mixed = [1, ['a', { b: 2 }], [true, [null]]];
      expect(flatten(mixed)).toEqual([1, 'a', { b: 2 }, true, [null]]);
    });
  });

  describe('flattenDeep', () => {
    it('should deeply flatten a nested array', () => {
      const nested = [1, [2, 3], [4, [5, [6]]]];
      expect(flattenDeep(nested)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should not change an already flat array', () => {
      const flat = [1, 2, 3, 4, 5];
      expect(flattenDeep(flat)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle deeply nested empty arrays', () => {
      const nestedEmpty = [1, [2, []], [[[]]], [4, [5]]];
      expect(flattenDeep(nestedEmpty)).toEqual([1, 2, 4, 5]);
    });

    it('should handle various data types in deep flatten', () => {
      const mixed = [1, ['a', { b: 2 }], [true, [null, [undefined]]]];
      expect(flattenDeep(mixed)).toEqual([1, 'a', { b: 2 }, true, null, undefined]);
    });
  });
});
