const gcd = require('./math-gcd');

describe('math-gcd', () => {
  test('computes GCD of 48 and 18', () => {
    expect(gcd(48, 18)).toBe(6);
  });

  test('computes GCD of 101 and 10', () => {
    expect(gcd(101, 10)).toBe(1);
  });

  test('handles zero values', () => {
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(5, 0)).toBe(5);
  });

  test('handles negative values', () => {
    expect(gcd(-48, 18)).toBe(6);
    expect(gcd(48, -18)).toBe(6);
  });
});
