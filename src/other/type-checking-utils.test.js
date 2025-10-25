const {
  isObject,
  isString,
  isNumber,
  isFunction,
  isDate,
  isRegExp,
} = require('./type-checking-utils');

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
