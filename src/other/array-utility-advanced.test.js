// src/other/array-utility-advanced.test.js

const { chunk } = require('./array-utility-advanced');

describe('Array Utility Advanced', () => {
  describe('chunk', () => {
    test('should split an array into chunks of specified size', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    });

    test('should handle an empty array', () => {
      expect(chunk([], 3)).toEqual([]);
    });

    test('should handle a size of 1', () => {
      expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });

    test('should handle a size larger than the array length', () => {
      expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    test('should default to a chunk size of 1 if size is not provided', () => {
      expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]]);
    });

    test('should return an empty array for non-array inputs', () => {
      expect(chunk(null, 2)).toEqual([]);
      expect(chunk(undefined, 2)).toEqual([]);
      expect(chunk(123, 2)).toEqual([]);
      expect(chunk('string', 2)).toEqual([]);
      expect(chunk({}, 2)).toEqual([]);
    });

    test('should return an empty array if size is less than 1', () => {
      expect(chunk([1, 2, 3], 0)).toEqual([]);
      expect(chunk([1, 2, 3], -1)).toEqual([]);
    });

    test('should handle arrays with mixed data types', () => {
      const mixedArray = [1, 'a', { key: 'value' }, null, undefined, [4, 5]];
      expect(chunk(mixedArray, 2)).toEqual([
        [1, 'a'],
        [{ key: 'value' }, null],
        [undefined, [4, 5]],
      ]);
    });
  });
});
