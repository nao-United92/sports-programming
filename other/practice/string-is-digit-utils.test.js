import isDigit from './string-is-digit-utils';

describe('isDigit', () => {
  test('should return true for strings containing only digits', () => {
    expect(isDigit('123')).toBe(true);
    expect(isDigit('0')).toBe(true);
    expect(isDigit('007')).toBe(true);
  });

  test('should return false for strings containing non-digit characters', () => {
    expect(isDigit('123a')).toBe(false);
    expect(isDigit('abc')).toBe(false);
    expect(isDigit('1.23')).toBe(false);
    expect(isDigit('-123')).toBe(false);
    expect(isDigit('')).toBe(false); // Empty string does not contain digits
    expect(isDigit(' ')).toBe(false);
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => isDigit(123)).toThrow(TypeError);
    expect(() => isDigit(null)).toThrow(TypeError);
    expect(() => isDigit(undefined)).toThrow(TypeError);
    expect(() => isDigit({})).toThrow(TypeError);
  });
});
