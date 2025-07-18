import { clamp, mapRange, sum, average, min, max } from './math-utils';

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

  describe('sum', () => {
    it('should calculate the sum of numbers in an array', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
      expect(sum([])).toBe(0);
      expect(sum([10])).toBe(10);
    });

    it('should return 0 for non-array input', () => {
      expect(sum(null)).toBe(0);
      expect(sum(undefined)).toBe(0);
      expect(sum('abc')).toBe(0);
    });
  });

  describe('average', () => {
    it('should calculate the average of numbers in an array', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
      expect(average([10])).toBe(10);
    });

    it('should return 0 for an empty array', () => {
      expect(average([])).toBe(0);
    });

    it('should return 0 for non-array input', () => {
      expect(average(null)).toBe(0);
      expect(average(undefined)).toBe(0);
      expect(average('abc')).toBe(0);
    });
  });

  describe('min', () => {
    it('should find the minimum number in an array', () => {
      expect(min([1, 2, 3, 4, 5])).toBe(1);
      expect(min([-1, -5, 0])).toBe(-5);
      expect(min([10])).toBe(10);
    });

    it('should return Infinity for an empty array', () => {
      expect(min([])).toBe(Infinity);
    });

    it('should return Infinity for non-array input', () => {
      expect(min(null)).toBe(Infinity);
      expect(min(undefined)).toBe(Infinity);
      expect(min('abc')).toBe(Infinity);
    });
  });

  describe('max', () => {
    it('should find the maximum number in an array', () => {
      expect(max([1, 2, 3, 4, 5])).toBe(5);
      expect(max([-1, -5, 0])).toBe(0);
      expect(max([10])).toBe(10);
    });

    it('should return -Infinity for an empty array', () => {
      expect(max([])).toBe(-Infinity);
    });

    it('should return -Infinity for non-array input', () => {
      expect(max(null)).toBe(-Infinity);
      expect(max(undefined)).toBe(-Infinity);
      expect(max('abc')).toBe(-Infinity);
    });
  });
});