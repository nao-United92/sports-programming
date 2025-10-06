import { clamp, inRange } from './number-utils.js';

describe('number-utils', () => {
  describe('clamp', () => {
    it('should clamp a number within the specified range', () => {
      expect(clamp(10, 0, 5)).toBe(5);
      expect(clamp(-5, 0, 5)).toBe(0);
      expect(clamp(3, 0, 5)).toBe(3);
    });

    it('should handle negative ranges correctly', () => {
      expect(clamp(-10, -5, -1)).toBe(-5);
      expect(clamp(0, -5, -1)).toBe(-1);
      expect(clamp(-3, -5, -1)).toBe(-3);
    });

    it('should handle zero as a boundary', () => {
      expect(clamp(10, -5, 0)).toBe(0);
      expect(clamp(-10, -5, 0)).toBe(-5);
      expect(clamp(-2, -5, 0)).toBe(-2);
    });
  });

  describe('inRange', () => {
    it('should return true if the number is within the range (exclusive end)', () => {
      expect(inRange(3, 0, 5)).toBe(true);
      expect(inRange(0, 0, 5)).toBe(true);
      expect(inRange(4, 0, 5)).toBe(true);
    });

    it('should return false if the number is outside the range', () => {
      expect(inRange(-1, 0, 5)).toBe(false);
      expect(inRange(5, 0, 5)).toBe(false);
      expect(inRange(10, 0, 5)).toBe(false);
    });

    it('should handle negative ranges correctly', () => {
      expect(inRange(-3, -5, -1)).toBe(true);
      expect(inRange(-5, -5, -1)).toBe(true);
      expect(inRange(-1, -5, -1)).toBe(false);
    });

    it('should handle zero as a boundary', () => {
      expect(inRange(-2, -5, 0)).toBe(true);
      expect(inRange(-5, -5, 0)).toBe(true);
      expect(inRange(0, -5, 0)).toBe(false);
    });
  });
});
