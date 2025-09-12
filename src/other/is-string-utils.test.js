import { isString } from './is-string-utils';

describe('isString', () => {
  it('should return true for string primitives', () => {
    expect(isString('hello')).toBe(true);
    expect(isString('')).toBe(true);
  });

  it('should return true for String objects', () => {
    expect(isString(new String('world'))).toBe(true);
  });

  it('should return false for non-string types', () => {
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(() => {})).toBe(false);
    expect(isString(Symbol('a'))).toBe(false);
  });
});
