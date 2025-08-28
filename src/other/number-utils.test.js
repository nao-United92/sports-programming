import { isEven, isOdd, average } from './number-utils.js';

describe('number-utils', () => {
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

  describe('average', () => {
    it('should return the average of an array of numbers', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
      expect(average([10, 20, 30])).toBe(20);
    });

    it('should return NaN for an empty array', () => {
      expect(average([])).toBeNaN();
    });
  });
});
