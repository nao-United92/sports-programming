import { clamp } from './numeric-range-limiter.js';

describe('clamp', () => {
  test('should clamp a number to the lower bound', () => {
    expect(clamp(5, 10, 20)).toBe(10);
  });

  test('should clamp a number to the upper bound', () => {
    expect(clamp(25, 10, 20)).toBe(20);
  });

  test('should not change a number within the bounds', () => {
    expect(clamp(15, 10, 20)).toBe(15);
  });

  test('should handle negative numbers', () => {
    expect(clamp(-15, -10, 0)).toBe(-10);
    expect(clamp(5, -10, 0)).toBe(0);
  });

  test('should handle inverted bounds', () => {
    expect(clamp(5, 20, 10)).toBe(10);
    expect(clamp(25, 20, 10)).toBe(20);
  });

  test('should return NaN if any argument is not a number', () => {
    expect(clamp('a', 1, 10)).toBeNaN();
    expect(clamp(5, 'b', 10)).toBeNaN();
    expect(clamp(5, 1, 'c')).toBeNaN();
    expect(clamp(null, 1, 10)).toBeNaN();
  });
});
