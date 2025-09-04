import { isNumber, isString, isBoolean, isFunction, isEmpty } from './is-type-utils.js';

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

describe('isEmpty', () => {
  test('should return true for empty values', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  test('should return false for non-empty values', () => {
    expect(isEmpty('a')).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty({ 'a': 1 })).toBe(false);
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);
    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });

  test('should return false for other types that are not collections', () => {
    expect(isEmpty(1)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(Symbol(''))).toBe(false);
    expect(isEmpty(() => {})).toBe(false);
  });
});