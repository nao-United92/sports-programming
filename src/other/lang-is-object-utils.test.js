import { isObject } from './lang-is-object-utils.js';

describe('isObject', () => {
  test('should return true for objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(new Date())).toBe(true);
    expect(isObject(/a/)).toBe(true);
  });

  test('should return true for arrays', () => {
    expect(isObject([])).toBe(true);
    expect(isObject([1, 2])).toBe(true);
  });

  test('should return true for functions', () => {
    expect(isObject(() => {})).toBe(true);
    expect(isObject(function() {})).toBe(true);
  });

  test('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isObject(undefined)).toBe(false);
  });

  test('should return false for strings', () => {
    expect(isObject('')).toBe(false);
    expect(isObject('hello')).toBe(false);
  });

  test('should return false for numbers', () => {
    expect(isObject(0)).toBe(false);
    expect(isObject(123)).toBe(false);
  });

  test('should return false for booleans', () => {
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
  });
});
