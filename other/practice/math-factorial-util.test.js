const factorial = require('./math-factorial-util');

describe('factorial', () => {
  test('calculates factorial of a number', () => {
    expect(factorial(5)).toBe(120);
  });
  test('returns 1 for 0', () => {
    expect(factorial(0)).toBe(1);
  });
});
