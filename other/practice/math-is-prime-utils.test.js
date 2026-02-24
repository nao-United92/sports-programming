import { mathIsPrime } from './math-is-prime-utils';

describe('mathIsPrime', () => {
  test('returns true for prime numbers', () => {
    expect(mathIsPrime(2)).toBe(true);
    expect(mathIsPrime(3)).toBe(true);
    expect(mathIsPrime(17)).toBe(true);
  });

  test('returns false for non-prime numbers', () => {
    expect(mathIsPrime(1)).toBe(false);
    expect(mathIsPrime(4)).toBe(false);
    expect(mathIsPrime(100)).toBe(false);
  });
});
