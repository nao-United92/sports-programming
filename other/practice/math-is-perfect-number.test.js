const isPerfectNumber = require('./math-is-perfect-number');

describe('isPerfectNumber', () => {
  test('returns true for perfect numbers', () => {
    expect(isPerfectNumber(6)).toBe(true); // 1 + 2 + 3 = 6
    expect(isPerfectNumber(28)).toBe(true); // 1 + 2 + 4 + 7 + 14 = 28
    expect(isPerfectNumber(496)).toBe(true);
  });

  test('returns false for non-perfect numbers', () => {
    expect(isPerfectNumber(1)).toBe(false);
    expect(isPerfectNumber(8)).toBe(false);
    expect(isPerfectNumber(10)).toBe(false);
  });

  test('handles zero and negative numbers', () => {
    expect(isPerfectNumber(0)).toBe(false);
    expect(isPerfectNumber(-6)).toBe(false);
  });
});
