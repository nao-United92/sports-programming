const factorial = require('./math-factorial-utils');

describe('factorial', () => {
  test('calculates factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });

  test('calculates factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('calculates factorial of 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('returns 0 for negative numbers', () => {
    expect(factorial(-1)).toBe(0);
  });
});
