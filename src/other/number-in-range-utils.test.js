const { inRange } = require('./number-in-range-utils.js');

describe('inRange', () => {
  test('should return true for a number within the range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
  });

  test('should return false for a number equal to the end of the range', () => {
    expect(inRange(4, 2, 4)).toBe(false);
  });

  test('should return false for a number outside the range', () => {
    expect(inRange(5, 2, 4)).toBe(false);
    expect(inRange(1, 2, 4)).toBe(false);
  });

  test('should handle swapped start and end arguments', () => {
    expect(inRange(3, 4, 2)).toBe(true);
  });

  test('should work with a single argument (range from 0)', () => {
    expect(inRange(2, 4)).toBe(true);
    expect(inRange(4, 4)).toBe(false);
    expect(inRange(-1, 4)).toBe(false);
  });

  test('should work with negative numbers', () => {
    expect(inRange(-3, -2, -4)).toBe(true);
    expect(inRange(-2, -4, -2)).toBe(false);
  });

  test('should handle floating point numbers', () => {
    expect(inRange(2.5, 1.5, 3.5)).toBe(true);
    expect(inRange(3.5, 1.5, 3.5)).toBe(false);
  });
});
