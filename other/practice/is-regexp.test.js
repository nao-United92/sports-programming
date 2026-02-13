import isRegExp from './is-regexp';

describe('isRegExp', () => {
  test('should return true for a RegExp literal', () => {
    expect(isRegExp(/abc/)).toBe(true);
  });

  test('should return true for a RegExp object created with new RegExp()', () => {
    expect(isRegExp(new RegExp('abc'))).toBe(true);
    expect(isRegExp(new RegExp('abc', 'i'))).toBe(true);
  });

  test('should return false for non-RegExp values', () => {
    expect(isRegExp(null)).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp('abc')).toBe(false);
    expect(isRegExp(123)).toBe(false);
    expect(isRegExp(true)).toBe(false);
    expect(isRegExp({})).toBe(false);
    expect(isRegExp([])).toBe(false);
    expect(isRegExp(new Date())).toBe(false);
  });

  test('should return false for objects mimicking RegExp behavior', () => {
    const fakeRegExp = {
      test: () => {},
      exec: () => {},
      source: 'abc'
    };
    expect(isRegExp(fakeRegExp)).toBe(false);
  });
});
