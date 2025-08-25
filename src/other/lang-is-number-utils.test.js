import { isNumber } from './lang-is-number-utils.js';

describe('isNumber', () => {
  test('should return true for number primitives', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(123)).toBe(true);
    expect(isNumber(-10)).toBe(true);
    expect(isNumber(3.14)).toBe(true);
  });

  test('should return true for Number objects', () => {
    expect(isNumber(new Number(123))).toBe(true);
  });

  test('should return false for strings', () => {
    expect(isNumber('')).toBe(false);
    expect(isNumber('123')).toBe(false);
  });

  test('should return false for booleans', () => {
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
  });

  test('should return false for null', () => {
    expect(isNumber(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isNumber(undefined)).toBe(false);
  });

  test('should return false for objects', () => {
    expect(isNumber({})).toBe(false);
    expect(isNumber({ a: 1 })).toBe(false);
  });

  test('should return false for arrays', () => {
    expect(isNumber([])).toBe(false);
    expect(isNumber([1, 2])).toBe(false);
  });

  test('should return false for functions', () => {
    expect(isNumber(() => {})).toBe(false);
  });

  test('should return true for NaN', () => {
    expect(isNumber(NaN)).toBe(true);
  });
});
