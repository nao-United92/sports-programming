const isEven = require('./number-is-even');

describe('isEven', () => {
  test('should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
  });

  test('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
  });

  test('should return false for non-number inputs', () => {
    expect(isEven('2')).toBe(false);
    expect(isEven(null)).toBe(false);
    expect(isEven(undefined)).toBe(false);
    expect(isEven([])).toBe(false);
  });
});
