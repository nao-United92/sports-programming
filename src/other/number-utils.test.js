import { clamp, inRange, randomInt } from './number-utils';

describe('Number Utilities', () => {
  describe('clamp', () => {
    it('should not change the number if it is within the range', () => {
      expect(clamp(5, 0, 10)).toBe(5);
    });

    it('should clamp to the lower bound if the number is smaller', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
    });

    it('should clamp to the upper bound if the number is larger', () => {
      expect(clamp(15, 0, 10)).toBe(10);
    });

    it('should work with negative numbers', () => {
      expect(clamp(-15, -10, 0)).toBe(-10);
      expect(clamp(5, -10, 0)).toBe(0);
    });
  });

  describe('inRange', () => {
    it('should return true if the number is within the range', () => {
      expect(inRange(5, 0, 10)).toBe(true);
    });

    it('should return false if the number is outside the range', () => {
      expect(inRange(15, 0, 10)).toBe(false);
      expect(inRange(-5, 0, 10)).toBe(false);
    });

    it('should handle the case where end is not specified', () => {
      expect(inRange(5, 10)).toBe(true);
      expect(inRange(15, 10)).toBe(false);
    });

    it('should automatically swap start and end if start is greater than end', () => {
      expect(inRange(5, 10, 0)).toBe(true);
    });
  });

  describe('randomInt', () => {
    it('should generate a random integer within the specified range', () => {
      const min = 1;
      const max = 10;
      const result = randomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    });

    it('should work with a range of a single number', () => {
      const result = randomInt(5, 5);
      expect(result).toBe(5);
    });
  });
});