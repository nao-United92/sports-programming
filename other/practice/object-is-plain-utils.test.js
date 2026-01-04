import { isPlainObject } from './object-is-plain-utils';

describe('isPlainObject', () => {
  test('should return true for a plain object literal', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({
      a: 1
    })).toBe(true);
  });

  test('should return true for an object created with Object.create(null)', () => {
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  test('should return false for an array', () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });

  test('should return false for a Date object', () => {
    expect(isPlainObject(new Date())).toBe(false);
  });

  test('should return false for a RegExp object', () => {
    expect(isPlainObject(/abc/)).toBe(false);
  });

  test('should return false for a custom class instance', () => {
    class MyClass {}
    expect(isPlainObject(new MyClass())).toBe(false);
  });

  test('should return false for a Function', () => {
    expect(isPlainObject(() => {})).toBe(false);
    expect(isPlainObject(function() {})).toBe(false);
  });

  test('should return false for null', () => {
    expect(isPlainObject(null)).toBe(false);
  });

  test('should return false for primitive values', () => {
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject('string')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
  });

  test('should return false for a Symbol', () => {
    expect(isPlainObject(Symbol('a'))).toBe(false);
  });
});
