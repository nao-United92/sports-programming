const gcd = require('./math-gcd-utils');

describe('gcd', () => {
  test('calculates GCD of 12 and 18', () => {
    expect(gcd(12, 18)).toBe(6);
  });

  test('calculates GCD of 8 and 12', () => {
    expect(gcd(8, 12)).toBe(4);
  });

  test('calculates GCD of 7 and 13', () => {
    expect(gcd(7, 13)).toBe(1);
  });

  test('handles negative numbers', () => {
    expect(gcd(-12, 18)).toBe(6);
  });
});
