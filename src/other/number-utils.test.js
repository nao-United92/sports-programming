const { clamp, inRange } = require('./number-utils');

describe('clamp', () => {
  test('should return the number if it is within the bounds', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test('should return the lower bound if the number is below it', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  test('should return the upper bound if the number is above it', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test('should handle negative bounds correctly', () => {
    expect(clamp(-15, -10, -5)).toBe(-10);
    expect(clamp(0, -10, -5)).toBe(-5);
  });

  test('should handle reversed bounds correctly', () => {
    expect(clamp(5, 10, 0)).toBe(5); // lower and upper are swapped internally
    expect(clamp(-5, 10, 0)).toBe(0);
    expect(clamp(15, 10, 0)).toBe(10);
  });

  test('should handle equal bounds', () => {
    expect(clamp(5, 5, 5)).toBe(5);
    expect(clamp(0, 5, 5)).toBe(5);
    expect(clamp(10, 5, 5)).toBe(5);
  });
});

describe('inRange', () => {
  test('should return true if number is within the range (start inclusive, end exclusive)', () => {
    expect(inRange(5, 0, 10)).toBe(true);
    expect(inRange(0, 0, 10)).toBe(true); // start is inclusive
    expect(inRange(9, 0, 10)).toBe(true);
  });

  test('should return false if number is outside the range', () => {
    expect(inRange(-1, 0, 10)).toBe(false);
    expect(inRange(10, 0, 10)).toBe(false); // end is exclusive
    expect(inRange(11, 0, 10)).toBe(false);
  });

  test('should handle reversed start and end values', () => {
    expect(inRange(5, 10, 0)).toBe(true); // Internally swaps to (0, 10)
    expect(inRange(0, 10, 0)).toBe(true);
    expect(inRange(9, 10, 0)).toBe(true);
    expect(inRange(-1, 10, 0)).toBe(false);
    expect(inRange(10, 10, 0)).toBe(false);
  });

  test('should handle only start provided (range from 0 to start-1)', () => {
    expect(inRange(5, 10)).toBe(true); // Internally (0, 10)
    expect(inRange(0, 10)).toBe(true);
    expect(inRange(9, 10)).toBe(true);
    expect(inRange(10, 10)).toBe(false);
  });

  test('should handle negative ranges', () => {
    expect(inRange(-5, -10, 0)).toBe(true);
    expect(inRange(-10, -10, 0)).toBe(true);
    expect(inRange(-1, -10, 0)).toBe(true);
    expect(inRange(0, -10, 0)).toBe(false);
    expect(inRange(-11, -10, 0)).toBe(false);
  });

  test('should handle equal start and end values', () => {
    expect(inRange(5, 5, 5)).toBe(false);
    expect(inRange(0, 0, 0)).toBe(false);
  });
});
