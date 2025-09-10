import { isObject } from './is-object-utils.js';

describe('isObject', () => {
  it('should return true for objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(new Object())).toBe(true);
  });

  it('should return true for arrays', () => {
    expect(isObject([])).toBe(true);
    expect(isObject([1, 2])).toBe(true);
  });

  it('should return true for functions', () => {
    expect(isObject(() => {})).toBe(true);
    expect(isObject(function() {})).toBe(true);
  });

  it('should return true for Date objects', () => {
    expect(isObject(new Date())).toBe(true);
  });

  it('should return true for RegExp objects', () => {
    expect(isObject(/a/)).toBe(true);
  });

  it('should return true for new Number() and new String()', () => {
    expect(isObject(new Number(0))).toBe(true);
    expect(isObject(new String(''))).toBe(true);
  });

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(isObject(1)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });
});
