import { isString, isNumber, isBoolean, isFunction, isObject, isArray, isNull, isUndefined } from './type-checking-utils.js';

describe('type-checking-utils', () => {
  describe('isString', () => {
    test('should return true for a string', () => {
      expect(isString('hello')).toBe(true);
      expect(isString('')).toBe(true);
    });

    test('should return false for non-strings', () => {
      expect(isString(123)).toBe(false);
      expect(isString(true)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString({})).toBe(false);
      expect(isString([])).toBe(false);
    });
  });

  describe('isNumber', () => {
    test('should return true for a number', () => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber(0)).toBe(true);
      expect(isNumber(-10)).toBe(true);
      expect(isNumber(3.14)).toBe(true);
    });

    test('should return false for non-numbers', () => {
      expect(isNumber('123')).toBe(false);
      expect(isNumber(true)).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber(NaN)).toBe(false);
      expect(isNumber({})).toBe(false);
      expect(isNumber([])).toBe(false);
    });
  });

  describe('isBoolean', () => {
    test('should return true for a boolean', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
    });

    test('should return false for non-booleans', () => {
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean(null)).toBe(false);
      expect(isBoolean(undefined)).toBe(false);
      expect(isBoolean({})).toBe(false);
      expect(isBoolean([])).toBe(false);
    });
  });

  describe('isFunction', () => {
    test('should return true for a function', () => {
      expect(isFunction(() => {})).toBe(true);
      expect(isFunction(function() {})).toBe(true);
      expect(isFunction(jest.fn())).toBe(true);
    });

    test('should return false for non-functions', () => {
      expect(isFunction(123)).toBe(false);
      expect(isFunction('func')).toBe(false);
      expect(isFunction(null)).toBe(false);
      expect(isFunction(undefined)).toBe(false);
      expect(isFunction({})).toBe(false);
      expect(isFunction([])).toBe(false);
    });
  });

  describe('isObject', () => {
    test('should return true for an object', () => {
      expect(isObject({})).toBe(true);
      expect(isObject({ a: 1 })).toBe(true);
      expect(isObject(new Date())).toBe(true);
    });

    test('should return false for non-objects or arrays', () => {
      expect(isObject(null)).toBe(false);
      expect(isObject(undefined)).toBe(false);
      expect(isObject(123)).toBe(false);
      expect(isObject('string')).toBe(false);
      expect(isObject(true)).toBe(false);
      expect(isObject([])).toBe(false);
    });
  });

  describe('isArray', () => {
    test('should return true for an array', () => {
      expect(isArray([])).toBe(true);
      expect(isArray([1, 2, 3])).toBe(true);
    });

    test('should return false for non-arrays', () => {
      expect(isArray(null)).toBe(false);
      expect(isArray(undefined)).toBe(false);
      expect(isArray(123)).toBe(false);
      expect(isArray('string')).toBe(false);
      expect(isArray(true)).toBe(false);
      expect(isArray({})).toBe(false);
    });
  });

  describe('isNull', () => {
    test('should return true for null', () => {
      expect(isNull(null)).toBe(true);
    });

    test('should return false for non-null values', () => {
      expect(isNull(undefined)).toBe(false);
      expect(isNull(0)).toBe(false);
      expect(isNull('')).toBe(false);
      expect(isNull(false)).toBe(false);
      expect(isNull({})).toBe(false);
    });
  });

  describe('isUndefined', () => {
    test('should return true for undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
    });

    test('should return false for non-undefined values', () => {
      expect(isUndefined(null)).toBe(false);
      expect(isUndefined(0)).toBe(false);
      expect(isUndefined('')).toBe(false);
      expect(isUndefined(false)).toBe(false);
      expect(isUndefined({})).toBe(false);
    });
  });
});