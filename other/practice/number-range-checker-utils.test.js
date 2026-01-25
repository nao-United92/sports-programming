const { inRange } = require('./number-range-checker-utils');

describe('inRange', () => {
  test('should return true if number is within the specified range (exclusive end)', () => {
    expect(inRange(5, 0, 10)).toBe(true);
  });

  test('should return false if number is outside the specified range', () => {
    expect(inRange(-1, 0, 10)).toBe(false);
    expect(inRange(10, 0, 10)).toBe(false); // end is exclusive
  });

  test('should handle reversed start and end values', () => {
    expect(inRange(5, 10, 0)).toBe(true);
    expect(inRange(-1, 10, 0)).toBe(false);
    expect(inRange(10, 10, 0)).toBe(false); // end is exclusive
  });

  test('should treat start as 0 if only two arguments are provided', () => {
    expect(inRange(5, 10)).toBe(true); // range is (0, 10)
    expect(inRange(10, 10)).toBe(false);
    expect(inRange(-1, 10)).toBe(false);
  });

  test('should handle floating point numbers', () => {
    expect(inRange(5.5, 0.1, 10.9)).toBe(true);
    expect(inRange(0.0, 0.1, 10.9)).toBe(false);
    expect(inRange(10.9, 0.1, 10.9)).toBe(false);
  });

  test('should handle negative numbers in range', () => {
    expect(inRange(-5, -10, 0)).toBe(true);
    expect(inRange(0, -10, 0)).toBe(false);
    expect(inRange(-11, -10, 0)).toBe(false);
  });

  test('should work with single point range (exclusive end)', () => {
    expect(inRange(5, 5, 5)).toBe(false);
    expect(inRange(5, 5)).toBe(false); // range is (0, 5)
  });
});
