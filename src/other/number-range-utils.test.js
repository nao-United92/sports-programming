const { clamp, inRange } = require('./number-range-utils');

describe('Number Range Utilities', () => {
  describe('clamp', () => {
    test('should return the number if it is within the range', () => {
      expect(clamp(5, 0, 10)).toBe(5);
    });

    test('should return the lower bound if the number is below the range', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
    });

    test('should return the upper bound if the number is above the range', () => {
      expect(clamp(15, 0, 10)).toBe(10);
    });

    test('should handle negative bounds correctly', () => {
      expect(clamp(-15, -10, -5)).toBe(-10);
      expect(clamp(-2, -10, -5)).toBe(-5);
      expect(clamp(0, -10, -5)).toBe(-5);
    });

    test('should handle floating point numbers', () => {
      expect(clamp(5.5, 0.1, 10.9)).toBe(5.5);
      expect(clamp(-0.5, 0.1, 10.9)).toBe(0.1);
      expect(clamp(11.0, 0.1, 10.9)).toBe(10.9);
    });
  });

  describe('inRange', () => {
    // Default: end exclusive, start inclusive
    test('should return true for number within the range (exclusive end)', () => {
      expect(inRange(5, 0, 10)).toBe(true);
      expect(inRange(0, 0, 10)).toBe(true);
      expect(inRange(9, 0, 10)).toBe(true);
    });

    test('should return false for number outside the range (exclusive end)', () => {
      expect(inRange(-1, 0, 10)).toBe(false);
      expect(inRange(10, 0, 10)).toBe(false);
      expect(inRange(11, 0, 10)).toBe(false);
    });

    // Inclusive end
    test('should return true for number within the range (inclusive end)', () => {
      expect(inRange(10, 0, 10, true)).toBe(true);
      expect(inRange(0, 0, 10, true)).toBe(true);
    });

    test('should return false for number outside the range (inclusive end)', () => {
      expect(inRange(11, 0, 10, true)).toBe(false);
      expect(inRange(-1, 0, 10, true)).toBe(false);
    });

    // Reversed start and end
    test('should handle reversed start and end values correctly', () => {
      expect(inRange(5, 10, 0)).toBe(true); // default exclusive end
      expect(inRange(0, 10, 0)).toBe(true);
      expect(inRange(9, 10, 0)).toBe(true);
      expect(inRange(-1, 10, 0)).toBe(false);
      expect(inRange(10, 10, 0)).toBe(false);
    });

    test('should handle reversed start and end values with inclusive end', () => {
      expect(inRange(10, 10, 0, true)).toBe(true);
      expect(inRange(0, 10, 0, true)).toBe(true);
      expect(inRange(11, 10, 0, true)).toBe(false);
    });

    // Single argument for range (start=0, end=start_arg)
    test('should handle single argument as end with start=0 (exclusive end)', () => {
      expect(inRange(5, 10)).toBe(true); // 0 to 10 exclusive end
      expect(inRange(0, 10)).toBe(true);
      expect(inRange(9, 10)).toBe(true);
      expect(inRange(10, 10)).toBe(false);
    });

    test('should handle single argument as end with start=0 (inclusive end)', () => {
      expect(inRange(10, 10, true)).toBe(true); // 0 to 10 inclusive end
      expect(inRange(0, 10, true)).toBe(true);
      expect(inRange(11, 10, true)).toBe(false);
    });
  });
});