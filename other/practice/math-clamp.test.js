import { clamp } from './math-clamp.js';

describe('clamp', () => {
  test('should clamp a number within the inclusive lower and upper bounds', () => {
    expect(clamp(10, -5, 5)).toBe(5);
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(0, -5, 5)).toBe(0);
  });

  test('should not alter numbers in range', () => {
    expect(clamp(3, -5, 5)).toBe(3);
    expect(clamp(-3, -5, 5)).toBe(-3);
  });

  test('should clamp to lower bound', () => {
    expect(clamp(-10, -5)).toBe(-5);
  });

  test('should handle floating point numbers', () => {
    expect(clamp(10.5, 0.5, 5.5)).toBe(5.5);
  });
});
