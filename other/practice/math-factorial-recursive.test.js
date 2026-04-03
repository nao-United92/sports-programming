const factorialRecursive = require('./math-factorial-recursive');

describe('factorialRecursive', () => {
  test('calculates factorial correctly', () => {
    expect(factorialRecursive(0)).toBe(1);
    expect(factorialRecursive(1)).toBe(1);
    expect(factorialRecursive(5)).toBe(120);
    expect(factorialRecursive(10)).toBe(3628800);
  });

  test('returns NaN for negative numbers', () => {
    expect(factorialRecursive(-1)).toBeNaN();
  });
});
