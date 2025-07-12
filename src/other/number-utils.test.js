import { isNumber, clamp, getRandomInt, formatNumber } from './number-utils.js';

describe('number-utils', () => {
  describe('isNumber', () => {
    it('should return true for a number', () => {
      expect(isNumber(123)).toBe(true);
    });

    it('should return false for a non-number', () => {
      expect(isNumber('hello')).toBe(false);
    });
  });

  describe('clamp', () => {
    it('should clamp a number between a min and max', () => {
      expect(clamp(10, 0, 5)).toBe(5);
      expect(clamp(-5, 0, 5)).toBe(0);
      expect(clamp(3, 0, 5)).toBe(3);
    });
  });

  describe('getRandomInt', () => {
    it('should return a random integer within a range', () => {
      const random = getRandomInt(1, 10);
      expect(random).toBeGreaterThanOrEqual(1);
      expect(random).toBeLessThanOrEqual(10);
    });
  });

  describe('formatNumber', () => {
    it('should format a number with a specified number of decimals', () => {
      expect(formatNumber(123.456, 2)).toBe('123.46');
    });

    it('should return an empty string if the input is not a number', () => {
      expect(formatNumber('hello', 2)).toBe('');
    });
  });
});
