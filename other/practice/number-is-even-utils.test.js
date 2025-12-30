import isEven from './number-is-even-utils';

describe('isEven', () => {
  test('should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
  });

  test('should return false for odd numbers', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(-5)).toBe(false);
  });

  test('should return false for non-number inputs', () => {
    expect(isEven('2')).toBe(false);
    expect(isEven(null)).toBe(false);
    expect(isEven(undefined)).toBe(false);
    expect(isEven({})).toBe(false);
  });

  test('should return false for floating point numbers', () => {
    expect(isEven(2.5)).toBe(false);
  });
});
