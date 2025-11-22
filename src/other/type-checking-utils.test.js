import {
  isObject,
  isString,
  isNumber,
  isFunction,
  isDate,
  isRegExp,
  isPlainObject,
} from './type-checking-utils.js';

describe('Type Checking Utilities', () => {
  describe('isObject', () => {
    test('should return true for objects', () => expect(isObject({})).toBe(true));
    test('should return false for arrays', () => expect(isObject([])).toBe(false));
    test('should return false for null', () => expect(isObject(null)).toBe(false));
    test('should return false for primitives', () => expect(isObject('str')).toBe(false));
  });

  describe('isString', () => {
    test('should return true for strings', () => expect(isString('hello')).toBe(true));
    test('should return false for non-strings', () => expect(isString(123)).toBe(false));
  });

  describe('isNumber', () => {
    test('should return true for numbers', () => expect(isNumber(123)).toBe(true));
    test('should return false for NaN', () => expect(isNumber(NaN)).toBe(false));
    test('should return false for non-numbers', () => expect(isNumber('123')).toBe(false));
  });

  describe('isFunction', () => {
    test('should return true for functions', () => expect(isFunction(() => {})).toBe(true));
    test('should return false for non-functions', () => expect(isFunction({})).toBe(false));
  });

  describe('isDate', () => {
    test('should return true for Date objects', () => expect(isDate(new Date())).toBe(true));
    test('should return false for non-Date objects', () => expect(isDate('2023-01-01')).toBe(false));
  });

  describe('isRegExp', () => {
    test('should return true for RegExp objects', () => expect(isRegExp(/a-z/)).toBe(true));
    test('should return false for non-RegExp objects', () => expect(isRegExp('/a-z/')).toBe(false));
  });
});

describe('isPlainObject', () => {
  test('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1, b: 2 })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  test('should return false for arrays', () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });

  test('should return false for null', () => {
    expect(isPlainObject(null)).toBe(false);
  });

  test('should return false for primitives', () => {
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject('string')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
  });

  test('should return false for instances of custom classes', () => {
    class MyClass {}
    expect(isPlainObject(new MyClass())).toBe(false);
  });

  test('should return false for built-in objects', () => {
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(/regex/)).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);
  });
});
