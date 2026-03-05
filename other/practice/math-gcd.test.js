const gcd = require('./math-gcd');

describe('gcd', () => {
  test('calculates the GCD of two positive numbers', () => {
    expect(gcd(48, 18)).toBe(6);
    expect(gcd(101, 10)).toBe(1);
  });

  test('handles zero correctly', () => {
    expect(gcd(48, 0)).toBe(48);
    expect(gcd(0, 18)).toBe(18);
  });

  test('handles negative numbers', () => {
    expect(gcd(-48, 18)).toBe(6);
    expect(gcd(48, -18)).toBe(6);
  });
});
