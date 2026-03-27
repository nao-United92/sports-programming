const isPerfectSquare = require('./math-is-perfect-square');

describe('isPerfectSquare', () => {
  test('returns true for perfect squares', () => {
    expect(isPerfectSquare(0)).toBe(true);
    expect(isPerfectSquare(1)).toBe(true);
    expect(isPerfectSquare(4)).toBe(true);
    expect(isPerfectSquare(9)).toBe(true);
    expect(isPerfectSquare(16)).toBe(true);
    expect(isPerfectSquare(25)).toBe(true);
    expect(isPerfectSquare(100)).toBe(true);
    expect(isPerfectSquare(121)).toBe(true);
  });

  test('returns false for non-perfect squares', () => {
    expect(isPerfectSquare(2)).toBe(false);
    expect(isPerfectSquare(3)).toBe(false);
    expect(isPerfectSquare(5)).toBe(false);
    expect(isPerfectSquare(8)).toBe(false);
    expect(isPerfectSquare(26)).toBe(false);
    expect(isPerfectSquare(-1)).toBe(false);
    expect(isPerfectSquare(-4)).toBe(false);
  });
});
