// src/other/array-comparison-utils.test.js

const { isEqual } = require('./array-comparison-utils');

describe('Array Comparison Utils', () => {
  describe('isEqual', () => {
    test('should return true for two identical arrays of primitives', () => {
      expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
      expect(isEqual(['a', 'b'], ['a', 'b'])).toBe(true);
      expect(isEqual([], [])).toBe(true);
    });

    test('should return false for arrays with different elements', () => {
      expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    });

    test('should return false for arrays with different order of elements', () => {
      expect(isEqual([1, 2, 3], [3, 2, 1])).toBe(false);
    });

    test('should return false for arrays with different lengths', () => {
      expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
      expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
    });

    test('should return true for arrays with identical nested arrays', () => {
      expect(isEqual([1, [2, 3], 4], [1, [2, 3], 4])).toBe(true);
    });

    test('should return false for arrays with different nested arrays', () => {
      expect(isEqual([1, [2, 3], 4], [1, [2, 4], 4])).toBe(false);
    });

    test('should return true for arrays with identical nested objects (shallow comparison for objects)', () => {
      const obj1 = { a: 1, b: 'test' };
      const obj2 = { a: 1, b: 'test' };
      expect(isEqual([1, obj1], [1, obj2])).toBe(true);
    });

    test('should return false for arrays with different nested objects (shallow comparison for objects)', () => {
      const obj1 = { a: 1, b: 'test' };
      const obj2 = { a: 1, b: 'different' };
      expect(isEqual([1, obj1], [1, obj2])).toBe(false);
    });

    test('should return false for non-array inputs', () => {
      expect(isEqual(null, [])).toBe(false);
      expect(isEqual([], undefined)).toBe(false);
      expect(isEqual(123, 456)).toBe(false);
      expect(isEqual({}, {})).toBe(false); // Not arrays
    });

    test('should handle arrays containing null and undefined', () => {
      expect(isEqual([1, null, 3], [1, null, 3])).toBe(true);
      expect(isEqual([1, undefined, 3], [1, undefined, 3])).toBe(true);
      expect(isEqual([1, null, 3], [1, undefined, 3])).toBe(false);
    });
  });
});
