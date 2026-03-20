import { factorial } from './math-factorial-simple';

describe('factorial', () => {
  test('calculates factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });

  test('calculates factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('returns undefined for negative numbers', () => {
    expect(factorial(-1)).toBeUndefined();
  });
});
