import isPlainObject from './object-is-plain-object-utils';

describe('isPlainObject', () => {
  test('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject(new Object())).toBe(true);
  });

  test('should return false for non-plain objects', () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(123)).toBe(false);
    expect(isPlainObject('abc')).toBe(false);
    expect(isPlainObject(() => {})).toBe(false);
    expect(isPlainObject(/a/)).toBe(false);
    function Custom() { this.a = 1 }
    expect(isPlainObject(new Custom())).toBe(false);
  });
});
