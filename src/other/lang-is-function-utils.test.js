import { isFunction } from './lang-is-function-utils.js';

describe('isFunction', () => {
  test('should return true for functions', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction(async () => {})).toBe(true);
    expect(isFunction(class A {})).toBe(true);
  });

  test('should return false for strings', () => {
    expect(isFunction('')).toBe(false);
    expect(isFunction('function')).toBe(false);
  });

  test('should return false for numbers', () => {
    expect(isFunction(0)).toBe(false);
    expect(isFunction(123)).toBe(false);
  });

  test('should return false for booleans', () => {
    expect(isFunction(true)).toBe(false);
    expect(isFunction(false)).toBe(false);
  });

  test('should return false for null', () => {
    expect(isFunction(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isFunction(undefined)).toBe(false);
  });

  test('should return false for objects', () => {
    expect(isFunction({})).toBe(false);
    expect(isFunction({ a: 1 })).toBe(false);
  });

  test('should return false for arrays', () => {
    expect(isFunction([])).toBe(false);
    expect(isFunction([1, 2])).toBe(false);
  });
});
