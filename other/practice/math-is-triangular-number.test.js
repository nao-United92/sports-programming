const isTriangularNumber = require('./math-is-triangular-number');

describe('isTriangularNumber', () => {
  test('returns true for triangular numbers', () => {
    expect(isTriangularNumber(0)).toBe(true);
    expect(isTriangularNumber(1)).toBe(true);
    expect(isTriangularNumber(3)).toBe(true);
    expect(isTriangularNumber(6)).toBe(true);
    expect(isTriangularNumber(10)).toBe(true);
    expect(isTriangularNumber(15)).toBe(true);
    expect(isTriangularNumber(21)).toBe(true);
    expect(isTriangularNumber(28)).toBe(true);
  });

  test('returns false for non-triangular numbers', () => {
    expect(isTriangularNumber(2)).toBe(false);
    expect(isTriangularNumber(4)).toBe(false);
    expect(isTriangularNumber(5)).toBe(false);
    expect(isTriangularNumber(7)).toBe(false);
    expect(isTriangularNumber(11)).toBe(false);
    expect(isTriangularNumber(-1)).toBe(false);
    expect(isTriangularNumber(-3)).toBe(false);
  });
});
