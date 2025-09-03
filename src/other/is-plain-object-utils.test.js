import { isPlainObject } from './is-plain-object-utils.js';

describe('isPlainObject', () => {
  it('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject(new Object())).toBe(true);
  });

  it('should return true for objects with a null prototype', () => {
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it('should return false for arrays', () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });

  it('should return false for class instances', () => {
    class MyClass {}
    expect(isPlainObject(new MyClass())).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isPlainObject(() => {})).toBe(false);
    function myFunction() {}
    expect(isPlainObject(myFunction)).toBe(false);
  });

  it('should return false for primitives and null/undefined', () => {
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject('a string')).toBe(false);
    expect(isPlainObject(123)).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(Symbol('a'))).toBe(false);
  });

  it('should return false for other built-in types', () => {
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);
    expect(isPlainObject(new WeakMap())).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(/a-z/)).toBe(false);
    expect(isPlainObject(new Error())).toBe(false);
  });
});