import { clamp, inRange } from './clamp-utils.js';

describe('clamp', () => {
  test('should clamp a number to the lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test('should clamp a number to the upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  test('should not clamp a number within the bounds', () => {
    expect(clamp(0, -5, 5)).toBe(0);
  });
});

describe('inRange', () => {
  test('should return true for a number within the range', () => {
    expect(inRange(3, 0, 5)).toBe(true);
  });

  test('should return false for a number outside the range', () => {
    expect(inRange(-1, 0, 5)).toBe(false);
    expect(inRange(5, 0, 5)).toBe(false); // exclusive of end
  });

  test('should handle negative numbers in range', () => {
    expect(inRange(-3, -5, 0)).toBe(true);
    expect(inRange(0, -5, 0)).toBe(false);
  });

  test('should handle start greater than end', () => {
    expect(inRange(3, 5, 0)).toBe(true);
    expect(inRange(0, 5, 0)).toBe(true);
    expect(inRange(5, 5, 0)).toBe(false);
  });

  test('should handle only start argument (range from 0 to start)', () => {
    expect(inRange(3, 5)).toBe(true);
    expect(inRange(5, 5)).toBe(false);
    expect(inRange(-1, 5)).toBe(false);
  });

  test('should return false for non-numeric inputs', () => {
    expect(inRange(null, 0, 5)).toBe(false);
    expect(inRange(undefined, 0, 5)).toBe(false);
    expect(inRange('3', 0, 5)).toBe(false);
    expect(inRange({}, 0, 5)).toBe(false);
  });

  test('should return false for NaN input', () => {
    expect(inRange(NaN, 0, 5)).toBe(false);
  });
});
