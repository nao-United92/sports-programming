const { isPlainObject } = require('./object-utils.js');

describe('isPlainObject', () => {
  test('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1, b: 2 })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
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

  test('should return false for primitive values', () => {
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject('string')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(Symbol('sym'))).toBe(false);
  });

  test('should return false for instances of custom classes', () => {
    class MyClass {}
    expect(isPlainObject(new MyClass())).toBe(false);
  });

  test('should return false for built-in objects', () => {
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(/regex/)).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);
  });
});