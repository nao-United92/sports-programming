const { clamp } = require('./math-clamp-utils');

describe('clamp', () => {
  test('should return the number itself if it is within the bounds', () => {
    expect(clamp(0, -5, 5)).toBe(0);
  });

  test('should clamp to the lower bound if the number is smaller', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test('should clamp to the upper bound if the number is larger', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  test('should work correctly if the number is equal to the lower bound', () => {
    expect(clamp(-5, -5, 5)).toBe(-5);
  });

  test('should work correctly if the number is equal to the upper bound', () => {
    expect(clamp(5, -5, 5)).toBe(5);
  });

  test('should handle swapped lower and upper bounds correctly', () => {
    expect(clamp(10, 5, -5)).toBe(5);
    expect(clamp(-10, 5, -5)).toBe(-5);
    expect(clamp(0, 5, -5)).toBe(0);
  });

  test('should work with all positive numbers', () => {
    expect(clamp(5, 10, 20)).toBe(10);
    expect(clamp(25, 10, 20)).toBe(20);
    expect(clamp(15, 10, 20)).toBe(15);
  });

  test('should work with all negative numbers', () => {
    expect(clamp(-25, -20, -10)).toBe(-20);
    expect(clamp(-5, -20, -10)).toBe(-10);
    expect(clamp(-15, -20, -10)).toBe(-15);
  });

  test('should work with zero as a bound', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(5, -10, 0)).toBe(0);
  });
});
