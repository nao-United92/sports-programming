// src/other/number-utils.test.js

const { clamp } = require('./number-utils');

describe('Number Utils', () => {
  describe('clamp', () => {
    test('should clamp a number within the specified range', () => {
      expect(clamp(10, 0, 5)).toBe(5);
      expect(clamp(-5, 0, 5)).toBe(0);
      expect(clamp(3, 0, 5)).toBe(3);
    });

    test('should handle cases where lower and upper bounds are equal', () => {
      expect(clamp(10, 5, 5)).toBe(5);
      expect(clamp(0, 5, 5)).toBe(5);
      expect(clamp(5, 5, 5)).toBe(5);
    });

    test('should handle negative numbers for bounds', () => {
      expect(clamp(-10, -5, -2)).toBe(-5);
      expect(clamp(0, -5, -2)).toBe(-2);
      expect(clamp(-3, -5, -2)).toBe(-3);
    });

    test('should return NaN for non-numeric inputs', () => {
      expect(clamp('abc', 0, 5)).toBeNaN();
      expect(clamp(10, 'def', 5)).toBeNaN();
      expect(clamp(10, 0, 'ghi')).toBeNaN();
      expect(clamp(null, 0, 5)).toBeNaN();
      expect(clamp(10, null, 5)).toBeNaN();
      expect(clamp(10, 0, null)).toBeNaN();
    });

    test('should handle floating point numbers', () => {
      expect(clamp(3.14, 0.5, 2.5)).toBe(2.5);
      expect(clamp(1.2, 0.5, 2.5)).toBe(1.2);
      expect(clamp(-1.0, -0.5, 0.5)).toBe(-0.5);
    });
  });
});
