const { clamp } = require('./number-clamp-utils');

describe('clamp', () => {
  test('should return the number if it is within the range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test('should return the upper bound if the number is above the range', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test('should return the lower bound if the number is below the range', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  test('should work with negative numbers', () => {
    expect(clamp(-15, -10, -5)).toBe(-10);
    expect(clamp(-7, -10, -5)).toBe(-7);
    expect(clamp(-2, -10, -5)).toBe(-5);
  });

  test('should handle cases where lower and upper bounds are the same', () => {
    expect(clamp(10, 5, 5)).toBe(5);
    expect(clamp(0, 5, 5)).toBe(5);
  });

  test('should work correctly even if lower and upper bounds are swapped', () => {
    expect(clamp(15, 10, 0)).toBe(10);
    expect(clamp(-5, 10, 0)).toBe(0);
    expect(clamp(5, 10, 0)).toBe(5);
  });

  test('should handle floating point numbers', () => {
    expect(clamp(3.14, 2.5, 4.5)).toBe(3.14);
    expect(clamp(1.2, 2.5, 4.5)).toBe(2.5);
    expect(clamp(5.8, 2.5, 4.5)).toBe(4.5);
  });
});
