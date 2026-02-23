import { gcd } from './math-gcd';

describe('gcd', () => {
  test('calculates the greatest common divisor of two numbers', () => {
    expect(gcd(12, 18)).toBe(6);
    expect(gcd(8, 12)).toBe(4);
    expect(gcd(17, 13)).toBe(1);
  });

  test('handles negative numbers', () => {
    expect(gcd(-12, 18)).toBe(6);
    expect(gcd(12, -18)).toBe(6);
    expect(gcd(-12, -18)).toBe(6);
  });

  test('handles zero', () => {
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(5, 0)).toBe(5);
    expect(gcd(0, 0)).toBe(0);
  });
});
