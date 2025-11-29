// src/other/array-utility-advanced-2.test.js

const { flattenDeep } = require('./array-utility-advanced-2');

describe('Array Utility Advanced 2', () => {
  describe('flattenDeep', () => {
    test('should flatten an array to a specified depth', () => {
      expect(flattenDeep([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
      expect(flattenDeep([1, [2, [3, [4]]]], 1)).toEqual([1, 2, [3, [4]]]);
      expect(flattenDeep([1, [2, [3, [4]]]], 0)).toEqual([1, [2, [3, [4]]]]);
    });

    test('should flatten completely if depth is Infinity', () => {
      expect(flattenDeep([1, [2, [3, [4]]]], Infinity)).toEqual([1, 2, 3, 4]);
    });

    test('should return the same array if no nested arrays', () => {
      expect(flattenDeep([1, 2, 3], 1)).toEqual([1, 2, 3]);
    });

    test('should handle empty array', () => {
      expect(flattenDeep([], 1)).toEqual([]);
    });

    test('should return an empty array for non-array inputs', () => {
      expect(flattenDeep(null, 1)).toEqual([]);
      expect(flattenDeep(undefined, 1)).toEqual([]);
      expect(flattenDeep(123, 1)).toEqual([]);
    });

    test('should return an empty array if depth is negative', () => {
      expect(flattenDeep([1, [2]], -1)).toEqual([]);
    });

    test('should handle arrays with mixed data types', () => {
      const mixedArray = [1, [2, 'a'], { key: 'value' }, [null, [undefined]]];
      expect(flattenDeep(mixedArray, 1)).toEqual([1, 2, 'a', { key: 'value' }, null, [undefined]]);
      expect(flattenDeep(mixedArray, Infinity)).toEqual([1, 2, 'a', { key: 'value' }, null, undefined]);
    });
  });
});
