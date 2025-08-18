import { clamp, lerp } from './number-math-utils';

describe('Number Math Utilities', () => {
  describe('clamp', () => {
    it('should return the number if it is within the bounds', () => {
      expect(clamp(5, 0, 10)).toBe(5);
    });

    it('should return the lower bound if the number is less than the lower bound', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
    });

    it('should return the upper bound if the number is greater than the upper bound', () => {
      expect(clamp(15, 0, 10)).toBe(10);
    });

    it('should work with negative numbers', () => {
      expect(clamp(-15, -10, 0)).toBe(-10);
      expect(clamp(5, -10, 0)).toBe(0);
      expect(clamp(-5, -10, 0)).toBe(-5);
    });
  });

  describe('lerp', () => {
    it('should return the start value when amount is 0', () => {
      expect(lerp(0, 10, 0)).toBe(0);
    });

    it('should return the end value when amount is 1', () => {
      expect(lerp(0, 10, 1)).toBe(10);
    });

    it('should return the midpoint when amount is 0.5', () => {
      expect(lerp(0, 10, 0.5)).toBe(5);
    });

    it('should work with negative numbers', () => {
      expect(lerp(-10, 10, 0.5)).toBe(0);
      expect(lerp(-10, 0, 0.5)).toBe(-5);
    });

    it('should extrapolate when amount is outside the 0-1 range', () => {
      expect(lerp(0, 10, 2)).toBe(20);
      expect(lerp(0, 10, -1)).toBe(-10);
    });
  });
});
