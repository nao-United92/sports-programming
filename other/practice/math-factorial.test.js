import { factorial } from './math-factorial';

describe('factorial', () => {
  test('calculates factorial of positive integers', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(3)).toBe(6);
  });

  test('calculates factorial of 0 and 1', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  test('returns undefined for negative integers', () => {
    expect(factorial(-1)).toBeUndefined();
  });

  test('calculates factorial of large numbers', () => {
    expect(factorial(10)).toBe(3628800);
  });
});
