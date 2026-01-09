import { gcd } from './math-gcd-utils.js';

describe('gcd', () => {
  test('should return the greatest common divisor of two positive integers', () => {
    expect(gcd(48, 18)).toBe(6);
  });

  test('should handle one of the numbers being zero', () => {
    expect(gcd(7, 0)).toBe(7);
    expect(gcd(0, 5)).toBe(5);
  });

  test('should handle negative numbers', () => {
    expect(gcd(-48, 18)).toBe(6);
    expect(gcd(48, -18)).toBe(6);
  });

  test('should return NaN for non-integer inputs', () => {
    expect(gcd(10.5, 5)).toBeNaN();
    expect(gcd('a', 5)).toBeNaN();
    expect(gcd(null, 5)).toBeNaN();
  });

  test('should return 0 for gcd(0, 0)', () => {
    expect(gcd(0, 0)).toBe(0);
  });
});
