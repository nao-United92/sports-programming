import { isBoolean } from './lang-is-boolean-utils.js';

describe('isBoolean', () => {
  test('should return true for boolean primitives', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  test('should return true for Boolean objects', () => {
    expect(isBoolean(new Boolean(true))).toBe(true);
    expect(isBoolean(new Boolean(false))).toBe(true);
  });

  test('should return false for strings', () => {
    expect(isBoolean('')).toBe(false);
    expect(isBoolean('true')).toBe(false);
  });

  test('should return false for numbers', () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(1)).toBe(false);
  });

  test('should return false for null', () => {
    expect(isBoolean(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isBoolean(undefined)).toBe(false);
  });

  test('should return false for objects', () => {
    expect(isBoolean({})).toBe(false);
    expect(isBoolean({ a: 1 })).toBe(false);
  });

  test('should return false for arrays', () => {
    expect(isBoolean([])).toBe(false);
    expect(isBoolean([true])).toBe(false);
  });

  test('should return false for functions', () => {
    expect(isBoolean(() => {})).toBe(false);
  });
});
