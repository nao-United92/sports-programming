import { isString } from './lang-is-string-utils.js';

describe('isString', () => {
  test('should return true for string primitives', () => {
    expect(isString('')).toBe(true);
    expect(isString('hello')).toBe(true);
  });

  test('should return true for String objects', () => {
    expect(isString(new String('hello'))).toBe(true);
  });

  test('should return false for numbers', () => {
    expect(isString(123)).toBe(false);
    expect(isString(0)).toBe(false);
  });

  test('should return false for booleans', () => {
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
  });

  test('should return false for null', () => {
    expect(isString(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isString(undefined)).toBe(false);
  });

  test('should return false for objects', () => {
    expect(isString({})).toBe(false);
    expect(isString({ a: 1 })).toBe(false);
  });

  test('should return false for arrays', () => {
    expect(isString([])).toBe(false);
    expect(isString([1, 2])).toBe(false);
  });

  test('should return false for functions', () => {
    expect(isString(() => {})).toBe(false);
  });
});
