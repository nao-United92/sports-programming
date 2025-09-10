import { isRegExp } from './is-regexp-utils.js';

describe('isRegExp', () => {
  it('should return true for RegExp literals', () => {
    expect(isRegExp(/abc/)).toBe(true);
    expect(isRegExp(/abc/g)).toBe(true);
  });

  it('should return true for RegExp objects', () => {
    expect(isRegExp(new RegExp('abc'))).toBe(true);
  });

  it('should return false for non-RegExp values', () => {
    expect(isRegExp(null)).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp(123)).toBe(false);
    expect(isRegExp('string')).toBe(false);
    expect(isRegExp(true)).toBe(false);
    expect(isRegExp([])).toBe(false);
    expect(isRegExp({})).toBe(false);
    expect(isRegExp(() => {})).toBe(false);
  });
});
