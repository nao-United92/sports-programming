import { isNumber, isString, isBoolean, isFunction } from './is-type-utils.js';

describe('isNumber', () => {
  test('should return true for number primitives', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(-123.45)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
  });

  test('should return true for number objects', () => {
    expect(isNumber(new Number(123))).toBe(true);
  });

  test('should return false for non-numbers', () => {
    expect(isNumber('123')).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
  });
});

describe('isString', () => {
  test('should return true for string primitives', () => {
    expect(isString('hello')).toBe(true);
    expect(isString('')).toBe(true);
  });

  test('should return true for string objects', () => {
    expect(isString(new String('hello'))).toBe(true);
  });

  test('should return false for non-strings', () => {
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString({})).toBe(false);
  });
});

describe('isBoolean', () => {
  test('should return true for boolean primitives', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  test('should return true for boolean objects', () => {
    expect(isBoolean(new Boolean(true))).toBe(true);
  });

  test('should return false for non-booleans', () => {
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean({})).toBe(false);
  });
});

describe('isFunction', () => {
  test('should return true for functions', () => {
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(new Function())).toBe(true);
  });

  test('should return false for non-functions', () => {
    expect(isFunction(123)).toBe(false);
    expect(isFunction('function')).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(/a/)).toBe(false);
  });
});
