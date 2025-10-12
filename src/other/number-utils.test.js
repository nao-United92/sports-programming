import { isEven, isOdd } from './number-utils.js';

describe('Number Utils', () => {
  describe('isEven', () => {
    test('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
    });

    test('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(-3)).toBe(false);
    });
  });

  describe('isOdd', () => {
    test('should return true for odd numbers', () => {
      expect(isOdd(1)).toBe(true);
      expect(isOdd(-3)).toBe(true);
    });

    test('should return false for even numbers', () => {
      expect(isOdd(2)).toBe(false);
      expect(isOdd(0)).toBe(false);
      expect(isOdd(-4)).toBe(false);
    });
  });
});