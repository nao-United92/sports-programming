const clamp = require('./number-clamp-utils');

describe('clamp', () => {
  test('should return the number if it is within the bounds', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, -10, 0)).toBe(-5);
    expect(clamp(0, -5, 5)).toBe(0);
  });

  test('should return the lower bound if the number is less than the lower bound', () => {
    expect(clamp(-2, 0, 10)).toBe(0);
    expect(clamp(-15, -10, 0)).toBe(-10);
  });

  test('should return the upper bound if the number is greater than the upper bound', () => {
    expect(clamp(12, 0, 10)).toBe(10);
    expect(clamp(5, -10, 0)).toBe(0);
  });

  test('should handle bounds in any order', () => {
    expect(clamp(5, 10, 0)).toBe(5); // lower bound is 0, upper is 10
    expect(clamp(12, 10, 0)).toBe(10); // lower bound is 0, upper is 10
    expect(clamp(-5, 10, 0)).toBe(0); // lower bound is 0, upper is 10
  });

  test('should handle edge cases with bounds equal to number', () => {
    expect(clamp(0, 0, 0)).toBe(0);
    expect(clamp(5, 5, 10)).toBe(5);
    expect(clamp(5, 0, 5)).toBe(5);
  });
});
