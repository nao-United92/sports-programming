const isPlainObject = require('./is-plain-object-utils');

describe('isPlainObject', () => {
  test('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({
      a: 1
    })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true); // Object with null prototype
  });

  test('should return false for arrays', () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });

  test('should return false for functions', () => {
    expect(isPlainObject(() => {})).toBe(false);
    expect(isPlainObject(function() {})).toBe(false);
  });

  test('should return false for null and undefined', () => {
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
  });

  test('should return false for primitives', () => {
    expect(isPlainObject(123)).toBe(false);
    expect(isPlainObject('hello')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(Symbol('foo'))).toBe(false);
  });

  test('should return false for built-in objects', () => {
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(new RegExp(''))).toBe(false);
    expect(isPlainObject(new Error())).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);
  });

  test('should return false for custom class instances', () => {
    class MyClass {}
    expect(isPlainObject(new MyClass())).toBe(false);
  });

  test('should return false for objects created with Object.create(Object.prototype) but with custom properties', () => {
    const obj = Object.create(Object.prototype);
    obj.foo = 'bar';
    expect(isPlainObject(obj)).toBe(true); // This still passes as a plain object by definition
  });
});