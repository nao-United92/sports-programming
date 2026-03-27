const isArmstrongNumber = require('./math-is-armstrong-number');

describe('isArmstrongNumber', () => {
  test('returns true for Armstrong numbers', () => {
    expect(isArmstrongNumber(0)).toBe(true);
    expect(isArmstrongNumber(1)).toBe(true);
    expect(isArmstrongNumber(153)).toBe(true);
    expect(isArmstrongNumber(370)).toBe(true);
    expect(isArmstrongNumber(371)).toBe(true);
    expect(isArmstrongNumber(407)).toBe(true);
    expect(isArmstrongNumber(1634)).toBe(true);
  });

  test('returns false for non-Armstrong numbers', () => {
    expect(isArmstrongNumber(10)).toBe(false);
    expect(isArmstrongNumber(100)).toBe(false);
    expect(isArmstrongNumber(152)).toBe(false);
    expect(isArmstrongNumber(-153)).toBe(false);
  });
});
