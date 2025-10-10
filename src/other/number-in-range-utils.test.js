const { inRange } = require('./number-in-range-utils.js');

describe('inRange', () => {
  test('should return true for a number within the range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
    expect(inRange(1, 0, 5)).toBe(true);
  });

  test('should return false for a number outside the range', () => {
    expect(inRange(5, 2, 4)).toBe(false);
    expect(inRange(-1, 0, 5)).toBe(false);
  });

  test('should handle ranges where start is greater than end', () => {
    expect(inRange(3, 4, 2)).toBe(true);
    expect(inRange(0, 5, -2)).toBe(true);
    expect(inRange(5, 6, 2)).toBe(true); // Corrected expectation
  });

  test('should handle ranges with only one argument (start defaults to 0)', () => {
    expect(inRange(2, 4)).toBe(true);
    expect(inRange(4, 4)).toBe(false);
    expect(inRange(-1, 4)).toBe(false);
    expect(inRange(2, -3)).toBe(false); // Corrected expectation: range is [-3, 0)
  });

  test('should return false for the end number', () => {
    expect(inRange(4, 2, 4)).toBe(false);
    expect(inRange(2, 2, 4)).toBe(true);
  });

  test('should work with floating-point numbers', () => {
    expect(inRange(2.5, 2, 3)).toBe(true);
    expect(inRange(3.5, 2, 3)).toBe(false);
  });
});