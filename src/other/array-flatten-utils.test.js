const { flatten, flattenDeep, flattenDepth } = require('./array-flatten-utils.js');

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

  describe('flattenDepth', () => {
    it('should flatten an array up to the specified depth', () => {
      const arr = [1, [2, [3, [4]]], 5];
      expect(flattenDepth(arr, 1)).toEqual([1, 2, [3, [4]], 5]);
      expect(flattenDepth(arr, 2)).toEqual([1, 2, 3, [4], 5]);
      expect(flattenDepth(arr, 3)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return a shallow copy if depth is 0', () => {
      const arr = [1, [2, [3]]];
      expect(flattenDepth(arr, 0)).toEqual(arr);
      expect(flattenDepth(arr, 0)).not.toBe(arr);
    });

    it('should flatten deeply if depth is greater than or equal to the maximum depth', () => {
      const arr = [1, [2, [3, [4]]], 5];
      expect(flattenDepth(arr, 100)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle empty arrays', () => {
      expect(flattenDepth([], 1)).toEqual([]);
      expect(flattenDepth([[], [[]]], 2)).toEqual([]);
    });

    it('should handle non-array elements', () => {
      const arr = [1, 'a', { b: 2 }, [3]];
      expect(flattenDepth(arr, 1)).toEqual([1, 'a', { b: 2 }, 3]);
    });

    it('should handle null or undefined values', () => {
      const arr = [1, [null, [undefined]], 2];
      expect(flattenDepth(arr, 2)).toEqual([1, null, undefined, 2]);
    });
  });
});