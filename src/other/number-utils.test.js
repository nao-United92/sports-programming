import { isEven, isOdd, randomInRange } from './number-utils.js';

describe('Number Utilities', () => {
  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(-3)).toBe(false);
    });
  });

  describe('isOdd', () => {
    it('should return true for odd numbers', () => {
      expect(isOdd(1)).toBe(true);
      expect(isOdd(-3)).toBe(true);
    });

    it('should return false for even numbers', () => {
      expect(isOdd(2)).toBe(false);
      expect(isOdd(0)).toBe(false);
      expect(isOdd(-4)).toBe(false);
    });
  });

  describe('randomInRange', () => {
    it('should generate a number within the specified range', () => {
      const min = 1;
      const max = 10;
      const result = randomInRange(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('should handle a range with negative numbers', () => {
      const min = -10;
      const max = -1;
      const result = randomInRange(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('should handle a range that includes zero', () => {
      const min = -5;
      const max = 5;
      const result = randomInRange(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });
});