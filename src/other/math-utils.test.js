// src/other/math-utils.test.js

const { sum } = require('./math-utils');

describe('Math Utils', () => {
  describe('sum', () => {
    test('should calculate the sum of positive numbers in an array', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should calculate the sum of negative numbers in an array', () => {
      expect(sum([-1, -2, -3])).toBe(-6);
    });

    test('should calculate the sum of mixed positive and negative numbers', () => {
      expect(sum([-1, 2, -3, 4])).toBe(2);
    });

    test('should return 0 for an empty array', () => {
      expect(sum([])).toBe(0);
    });

    test('should return 0 for non-array inputs', () => {
      expect(sum(null)).toBe(0);
      expect(sum(undefined)).toBe(0);
      expect(sum(123)).toBe(0);
      expect(sum('string')).toBe(0);
      expect(sum({})).toBe(0);
    });

    test('should ignore non-numeric values in the array', () => {
      expect(sum([1, 'a', 2, null, 3, undefined, NaN])).toBe(6);
    });

    test('should handle floating point numbers', () => {
      expect(sum([1.5, 2.5, 3.0])).toBe(7.0);
    });

    test('should handle a single number in the array', () => {
      expect(sum([10])).toBe(10);
    });
  });
});
