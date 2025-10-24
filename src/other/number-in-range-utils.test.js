
import { inRange } from './number-in-range-utils';

describe('inRange', () => {
  test('should return true if number is within the range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
  });

  test('should return false if number is outside the range', () => {
    expect(inRange(1, 2, 4)).toBe(false);
    expect(inRange(4, 2, 4)).toBe(false);
  });

  test('should handle range with only start specified (0 to start)', () => {
    expect(inRange(3, 5)).toBe(true);
    expect(inRange(5, 5)).toBe(false);
    expect(inRange(-1, 5)).toBe(false);
  });

  test('should handle swapped start and end values', () => {
    expect(inRange(3, 4, 2)).toBe(true);
    expect(inRange(2, 4, 2)).toBe(true);
    expect(inRange(4, 4, 2)).toBe(false);
  });

  test('should handle negative numbers in range', () => {
    expect(inRange(-1, -2, 0)).toBe(true);
    expect(inRange(0, -2, 0)).toBe(false);
    expect(inRange(-3, -2, 0)).toBe(false);
  });

  test('should return false for non-numeric inputs', () => {
    expect(inRange('3', 2, 4)).toBe(false);
    expect(inRange(3, '2', 4)).toBe(false);
    expect(inRange(3, 2, '4')).toBe(false);
    expect(inRange(null, 2, 4)).toBe(false);
    expect(inRange(3, null, 4)).toBe(false);
  });

  test('should handle floating point numbers', () => {
    expect(inRange(3.5, 3, 4)).toBe(true);
    expect(inRange(3.0, 3, 4)).toBe(true);
    expect(inRange(4.0, 3, 4)).toBe(false);
  });
});
