import { isPlainObject } from './is-plain-object-utils.js';

describe('isPlainObject', () => {
  it('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it('should return false for arrays', () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject([1, 2])).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isPlainObject(() => {})).toBe(false);
    expect(isPlainObject(function() {})).toBe(false);
  });

  it('should return false for null and undefined', () => {
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject('string')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
  });

  it('should return false for instances of custom classes', () => {
    class MyClass {}
    expect(isPlainObject(new MyClass())).toBe(false);
  });

  it('should return false for built-in objects', () => {
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(/a/)).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);
  });
});