const { isPlainObject } = require('./type-is-plain-object-utils.js');

describe('isPlainObject', () => {
  it('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1, b: 2 })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
    expect(isPlainObject(Object.create({}))).toBe(true); // This is also a plain object
  });

  it('should return false for arrays', () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isPlainObject(() => {})).toBe(false);
    expect(isPlainObject(function() {})).toBe(false);
  });

  it('should return false for null', () => {
    expect(isPlainObject(null)).toBe(false);
  });

  it('should return false for primitive values', () => {
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject('hello')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
  });

  it('should return false for Date objects', () => {
    expect(isPlainObject(new Date())).toBe(false);
  });

  it('should return false for RegExp objects', () => {
    expect(isPlainObject(/abc/)).toBe(false);
  });

  it('should return false for custom class instances', () => {
    class MyClass {}
    expect(isPlainObject(new MyClass())).toBe(false);
  });
});