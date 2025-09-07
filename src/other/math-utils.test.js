import { clamp, lerp } from './math-utils.js';

describe('Math Utilities', () => {
  describe('clamp', () => {
    it('should clamp a value within the range', () => {
      expect(clamp(5, 0, 10)).toBe(5);
    });

    it('should clamp a value below the minimum', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
    });

    it('should clamp a value above the maximum', () => {
      expect(clamp(15, 0, 10)).toBe(10);
    });
  });

  describe('lerp', () => {
    it('should linearly interpolate between two values', () => {
      expect(lerp(0, 10, 0.5)).toBe(5);
    });

    it('should return the start value when amount is 0', () => {
      expect(lerp(0, 10, 0)).toBe(0);
    });

    it('should return the end value when amount is 1', () => {
      expect(lerp(0, 10, 1)).toBe(10);
    });

    it('should handle negative values', () => {
      expect(lerp(-10, 0, 0.5)).toBe(-5);
    });
  });
});
