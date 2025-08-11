import { inRange, random } from './number-utils.js';

describe('Number Utils', () => {
  describe('inRange', () => {
    it('should return true if the number is in range', () => {
      expect(inRange(3, 2, 4)).toBe(true);
    });

    it('should return false if the number is out of range', () => {
      expect(inRange(5, 2, 4)).toBe(false);
    });

    it('should work with a single argument', () => {
      expect(inRange(2, 4)).toBe(true);
      expect(inRange(4, 4)).toBe(false);
    });

    it('should work with negative numbers', () => {
      expect(inRange(-3, -4, -2)).toBe(true);
    });
  });

  describe('random', () => {
    it('should return a number within the specified range', () => {
      const result = random(1, 5);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(5);
    });

    it('should work with default arguments', () => {
      const result = random();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(1);
    });

    it('should work with negative numbers', () => {
      const result = random(-5, -1);
      expect(result).toBeGreaterThanOrEqual(-5);
      expect(result).toBeLessThanOrEqual(-1);
    });
  });
});