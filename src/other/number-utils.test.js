import { clamp, inRange } from './number-utils.js';

describe('Number Utilities', () => {
  describe('clamp', () => {
    it('should clamp a number to the lower bound', () => {
      expect(clamp(-10, -5, 5)).toBe(-5);
    });

    it('should clamp a number to the upper bound', () => {
      expect(clamp(10, -5, 5)).toBe(5);
    });

    it('should not clamp a number within the range', () => {
      expect(clamp(0, -5, 5)).toBe(0);
    });
  });

  describe('inRange', () => {
    it('should return true for a number within the range', () => {
      expect(inRange(3, 1, 5)).toBe(true);
    });

    it('should return false for a number outside the range', () => {
      expect(inRange(6, 1, 5)).toBe(false);
    });

    it('should handle a swapped range', () => {
      expect(inRange(3, 5, 1)).toBe(true);
    });

    it('should work with a single range argument', () => {
      expect(inRange(3, 5)).toBe(true);
      expect(inRange(6, 5)).toBe(false);
    });

    it('should include the bounds', () => {
      expect(inRange(1, 1, 5)).toBe(true);
      expect(inRange(5, 1, 5)).toBe(true);
    });
  });
});
