// src/other/array-utility-functions-advanced-2.test.js

const { difference } = require('./array-utility-functions-advanced-2');

describe('Array Utility Functions Advanced 2', () => {
  describe('difference', () => {
    test('should return the symmetric difference of two arrays', () => {
      expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1, 4]);
      expect(difference(['a', 'b', 'c'], ['b', 'd'])).toEqual(['a', 'c', 'd']);
      expect(difference([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('should handle empty arrays', () => {
      expect(difference([], [1, 2])).toEqual([1, 2]);
      expect(difference([1, 2], [])).toEqual([1, 2]);
      expect(difference([], [])).toEqual([]);
    });

    test('should handle arrays with duplicate values within themselves', () => {
      expect(difference([1, 1, 2], [2, 3, 3])).toEqual([1, 3]);
    });

    test('should handle arrays with mixed data types', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      expect(difference([1, 'a', obj1], ['a', obj2])).toEqual([1, obj1, obj2]);
    });

    test('should return an empty array for non-array inputs', () => {
      expect(difference(null, [1, 2])).toEqual([]);
      expect(difference([1, 2], undefined)).toEqual([]);
      expect(difference(123, 456)).toEqual([]);
    });
  });
});
