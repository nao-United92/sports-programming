const sumDigits = require('./math-sum-digits');

describe('sumDigits', () => {
  test('returns sum of digits for positive numbers', () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(456)).toBe(15);
    expect(sumDigits(9)).toBe(9);
    expect(sumDigits(100)).toBe(1);
  });

  test('returns sum of digits for negative numbers', () => {
    expect(sumDigits(-123)).toBe(6);
  });

  test('returns 0 for 0', () => {
    expect(sumDigits(0)).toBe(0);
  });
});
