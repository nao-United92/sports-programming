const isEven = require('./math-is-even-util');

describe('isEven', () => {
  test('returns true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
  });

  test('returns false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
  });

  test('throws error for non-number input', () => {
    expect(() => isEven('2')).toThrow('Input must be a number');
  });
});
