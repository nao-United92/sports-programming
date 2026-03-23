import { gcd } from './math-gcd.js';

describe('gcd', () => {
  test('should find GCD of two positive integers', () => {
    expect(gcd(48, 18)).toBe(6);
  });

  test('should find GCD when one number is 0', () => {
    expect(gcd(10, 0)).toBe(10);
    expect(gcd(0, 5)).toBe(5);
  });

  test('should handle negative numbers', () => {
    expect(gcd(-48, 18)).toBe(6);
    expect(gcd(48, -18)).toBe(6);
  });

  test('should return NaN for non-integers', () => {
    expect(gcd(48.5, 18)).toBe(NaN);
  });
});
