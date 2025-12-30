import isPlainObject from './is-plain-object-utils';

describe('isPlainObject', () => {
  test('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject(new Object())).toBe(true);
  });

  test('should return false for non-plain objects', () => {
    function MyClass() { this.a = 1; }
    expect(isPlainObject(new MyClass())).toBe(false);
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(new String(''))).toBe(false);
  });

  test('should return false for primitives and null/undefined', () => {
    expect(isPlainObject(123)).toBe(false);
    expect(isPlainObject('hello')).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
  });
});
