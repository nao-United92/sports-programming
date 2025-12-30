import isString from './is-string-utils';

describe('isString', () => {
  test('should return true for string primitives', () => {
    expect(isString('hello')).toBe(true);
    expect(isString('')).toBe(true);
  });

  test('should return true for string objects', () => {
    expect(isString(new String('hello'))).toBe(true);
  });

  test('should return false for non-string values', () => {
    expect(isString(123)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(() => {})).toBe(false);
  });
});
