// src/other/array-utility-functions.test.js

const { unique } = require('./array-utility-functions');

describe('Array Utility Functions', () => {
  describe('unique', () => {
    test('should return a new array with unique values', () => {
      expect(unique([1, 2, 2, 3, 1, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle an array with no duplicates', () => {
      expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('should handle an empty array', () => {
      expect(unique([])).toEqual([]);
    });

    test('should handle an array with all duplicate values', () => {
      expect(unique([1, 1, 1, 1])).toEqual([1]);
    });

    test('should handle mixed types including null and undefined', () => {
      expect(unique([1, null, 2, undefined, 1, null, 'a', 'a'])).toEqual([1, null, 2, undefined, 'a']);
    });

    test('should return an empty array for non-array inputs', () => {
      expect(unique(null)).toEqual([]);
      expect(unique(undefined)).toEqual([]);
      expect(unique(123)).toEqual([]);
      expect(unique('string')).toEqual([]);
      expect(unique({})).toEqual([]);
    });

    test('should handle objects in array (reference equality)', () => {
      const obj1 = { a: 1 };
      const obj2 = { a: 1 };
      expect(unique([obj1, obj2, obj1])).toEqual([obj1, obj2]);
    });
  });
});
