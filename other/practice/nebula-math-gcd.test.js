const gcd = require('./nebula-math-gcd');

describe('nebula-math-gcd', () => {
  test('should return gcd of two positive integers', () => {
    expect(gcd(48, 18)).toBe(6);
    expect(gcd(54, 24)).toBe(6);
    expect(gcd(101, 10)).toBe(1);
    expect(gcd(100, 10)).toBe(10);
  });

  test('should handle zero', () => {
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(5, 0)).toBe(5);
    expect(gcd(0, 0)).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(gcd(-48, 18)).toBe(6);
    expect(gcd(48, -18)).toBe(6);
    expect(gcd(-48, -18)).toBe(6);
  });

  test('should throw error for non-number input', () => {
    expect(() => gcd('a', 5)).toThrow('Input must be numbers');
    expect(() => gcd(5, NaN)).toThrow('Input must be numbers');
  });
});
