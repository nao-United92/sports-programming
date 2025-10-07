import { sqrt } from './math-sqrt-utils.js';

describe('sqrt', () => {
  test('should return the correct square root for a positive integer', () => {
    expect(sqrt(9)).toBe(3);
    expect(sqrt(16)).toBe(4);
  });

  test('should return 0 for 0', () => {
    expect(sqrt(0)).toBe(0);
  });

  test('should return -1 for a negative integer', () => {
    expect(sqrt(-9)).toBe(-1);
  });

  test('should return the correct square root for a non-perfect square', () => {
    expect(sqrt(2)).toBeCloseTo(1.414);
  });
});
