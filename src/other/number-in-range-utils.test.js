import { inRange } from './number-in-range-utils.js';

describe('inRange', () => {
  test('should return true if the number is within the range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
  });

  test('should return false if the number is outside the range', () => {
    expect(inRange(1, 2, 4)).toBe(false);
    expect(inRange(4, 2, 4)).toBe(false);
  });

  test('should handle cases where start is greater than end', () => {
    expect(inRange(3, 4, 2)).toBe(true);
    expect(inRange(1, 4, 2)).toBe(false);
    expect(inRange(4, 4, 2)).toBe(false);
  });

  test('should handle single argument (only end is provided, start defaults to 0)', () => {
    expect(inRange(3, 5)).toBe(true);
    expect(inRange(5, 5)).toBe(false);
    expect(inRange(-1, 5)).toBe(false);
  });

  test('should handle floating point numbers', () => {
    expect(inRange(3.5, 2.1, 4.9)).toBe(true);
    expect(inRange(2.0, 2.1, 4.9)).toBe(false);
    expect(inRange(5.0, 2.1, 4.9)).toBe(false);
  });

  test('should return false if number is equal to start or end when start < end', () => {
    expect(inRange(2, 2, 4)).toBe(false);
    expect(inRange(4, 2, 4)).toBe(false);
  });

  test('should return false if number is equal to start or end when start > end', () => {
    expect(inRange(4, 4, 2)).toBe(false);
    expect(inRange(2, 4, 2)).toBe(false);
  });
});
