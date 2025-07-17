import { clamp, mapRange } from './math-utils';

describe('math-utils', () => {
  describe('clamp', () => {
    it('should clamp a number within the bounds', () => {
      expect(clamp(10, 0, 100)).toBe(10);
    });

    it('should clamp a number below the lower bound', () => {
      expect(clamp(-10, 0, 100)).toBe(0);
    });

    it('should clamp a number above the upper bound', () => {
      expect(clamp(110, 0, 100)).toBe(100);
    });

    it('should handle negative bounds', () => {
      expect(clamp(-5, -10, -2)).toBe(-5);
      expect(clamp(-15, -10, -2)).toBe(-10);
      expect(clamp(0, -10, -2)).toBe(-2);
    });
  });

  describe('mapRange', () => {
    it('should map a number from one range to another', () => {
      expect(mapRange(50, 0, 100, 0, 1)).toBe(0.5);
      expect(mapRange(0, 0, 100, 0, 1000)).toBe(0);
      expect(mapRange(100, 0, 100, 0, 1000)).toBe(1000);
      expect(mapRange(25, 0, 100, 0, 10)).toBe(2.5);
    });

    it('should handle negative ranges', () => {
      expect(mapRange(0, -10, 10, 0, 100)).toBe(50);
      expect(mapRange(-10, -10, 10, 0, 100)).toBe(0);
      expect(mapRange(10, -10, 10, 0, 100)).toBe(100);
    });

    it('should handle inverted output ranges', () => {
      expect(mapRange(50, 0, 100, 1, 0)).toBe(0.5);
      expect(mapRange(0, 0, 100, 100, 0)).toBe(100);
      expect(mapRange(100, 0, 100, 100, 0)).toBe(0);
    });
  });
});