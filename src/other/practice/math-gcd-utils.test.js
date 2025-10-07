import { gcd } from './math-gcd-utils.js';

describe('gcd', () => {
  test('should return the correct gcd for two positive integers', () => {
    expect(gcd(48, 18)).toBe(6);
    expect(gcd(101, 103)).toBe(1);
  });

  test('should return the number itself when the other number is 0', () => {
    expect(gcd(48, 0)).toBe(48);
    expect(gcd(0, 48)).toBe(48);
  });

  test('should work with one as one of the numbers', () => {
    expect(gcd(1, 5)).toBe(1);
    expect(gcd(5, 1)).toBe(1);
  });

  test('should work with identical numbers', () => {
    expect(gcd(7, 7)).toBe(7);
  });
});
