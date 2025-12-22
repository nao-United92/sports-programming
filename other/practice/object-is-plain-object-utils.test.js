import { isPlainObject } from './object-is-plain-object-utils';

describe('isPlainObject', () => {
  it('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject(new Object())).toBe(true);
  });

  it('should return false for non-plain objects', () => {
    expect(isPlainObject([1, 2, 3])).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject("test")).toBe(false);
    expect(isPlainObject(123)).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(Symbol('foo'))).toBe(false);
    function MyClass() {}
    expect(isPlainObject(new MyClass())).toBe(false);
    expect(isPlainObject(/abc/)).toBe(false);
  });
});