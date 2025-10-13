import { factorial } from './math-utils.js';

describe('Math Utils', () => {
  describe('factorial', () => {
    test('should return the factorial of a number', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(5)).toBe(120);
      expect(factorial(10)).toBe(3628800);
    });

    test('should return NaN for negative numbers', () => {
      expect(isNaN(factorial(-1))).toBe(true);
    });
  });
});