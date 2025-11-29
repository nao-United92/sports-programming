// src/other/array-utility-functions-advanced-3.test.js

const { intersection } = require('./array-utility-functions-advanced-3');

describe('Array Utility Functions Advanced 3', () => {
  describe('intersection', () => {
    test('should return common elements between two arrays', () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
      expect(intersection(['a', 'b'], ['b', 'c'])).toEqual(['b']);
      expect(intersection([1, 2], [3, 4])).toEqual([]);
    });

    test('should return common elements between multiple arrays', () => {
      expect(intersection([1, 2, 3, 4], [2, 3, 5], [3, 6, 2])).toEqual([2, 3]);
    });

    test('should handle empty arrays', () => {
      expect(intersection([], [1, 2])).toEqual([]);
      expect(intersection([1, 2], [])).toEqual([]);
      expect(intersection([], [])).toEqual([]);
    });

    test('should handle arrays with duplicate values within themselves', () => {
      expect(intersection([1, 1, 2], [2, 3, 3])).toEqual([2]);
    });

    test('should handle arrays with mixed data types', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      expect(intersection([1, 'a', obj1], ['a', obj2, obj1])).toEqual(['a', obj1]);
    });

    test('should return an empty array if no arrays are provided', () => {
      expect(intersection()).toEqual([]);
    });

    test('should return unique elements of a single array if only one is provided', () => {
      expect(intersection([1, 2, 2, 3])).toEqual([1, 2, 3]);
    });

    test('should handle non-array inputs gracefully in sources', () => {
      expect(intersection([1, 2], null, [2, 3])).toEqual([]);
      expect(intersection([1, 2], [2, 3], undefined)).toEqual([]);
    });
  });
});
