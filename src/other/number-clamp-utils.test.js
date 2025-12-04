import { clamp } from './number-clamp-utils';

describe('clamp', () => {
  test('should clamp a number to the lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test('should clamp a number to the upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  test('should not clamp a number within the range', () => {
    expect(clamp(0, -5, 5)).toBe(0);
  });

  test('should handle the lower bound correctly', () => {
    expect(clamp(-5, -5, 5)).toBe(-5);
  });

  test('should handle the upper bound correctly', () => {
    expect(clamp(5, -5, 5)).toBe(5);
  });
});