import { factorial } from './math-factorial-utils.js';

describe('factorial', () => {
  test('should return the correct factorial for a positive integer', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(1)).toBe(1);
  });

  test('should return 1 for 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('should return -1 for a negative integer', () => {
    expect(factorial(-5)).toBe(-1);
  });
});
