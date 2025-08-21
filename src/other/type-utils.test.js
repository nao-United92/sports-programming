import {
  isObject,
  isFunction,
  isString,
  isNumber,
  isBoolean,
  isUndefined,
  isNull,
  isArray,
  isDate,
  isRegExp,
} from './type-utils.js';

describe('Type Checking Utilities', () => {
  describe('isObject', () => {
    it('should return true for objects and arrays, and false for others', () => {
      expect(isObject({})).toBe(true);
      expect(isObject([])).toBe(true);
      expect(isObject(null)).toBe(false);
      expect(isObject(42)).toBe(false);
    });
  });

  describe('isFunction', () => {
    it('should return true for functions and false for others', () => {
      expect(isFunction(() => {})).toBe(true);
      expect(isFunction(function() {})).toBe(true);
      expect(isFunction({})).toBe(false);
    });
  });

  describe('isString', () => {
    it('should return true for strings and false for others', () => {
      expect(isString('hello')).toBe(true);
      expect(isString(new String('hello'))).toBe(false); // String object is not a primitive string
      expect(isString(42)).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('should return true for numbers and false for others', () => {
      expect(isNumber(42)).toBe(true);
      expect(isNumber(NaN)).toBe(true);
      expect(isNumber('42')).toBe(false);
    });
  });

  describe('isBoolean', () => {
    it('should return true for booleans and false for others', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
      expect(isBoolean(0)).toBe(false);
    });
  });

  describe('isUndefined', () => {
    it('should return true for undefined and false for others', () => {
      expect(isUndefined(undefined)).toBe(true);
      expect(isUndefined(null)).toBe(false);
    });
  });

  describe('isNull', () => {
    it('should return true for null and false for others', () => {
      expect(isNull(null)).toBe(true);
      expect(isNull(undefined)).toBe(false);
      expect(isNull(0)).toBe(false);
    });
  });

  describe('isArray', () => {
    it('should return true for arrays and false for others', () => {
      expect(isArray([])).toBe(true);
      expect(isArray({})).toBe(false);
    });
  });

  describe('isDate', () => {
    it('should return true for Date objects and false for others', () => {
      expect(isDate(new Date())).toBe(true);
      expect(isDate('2022-01-01')).toBe(false);
    });
  });

  describe('isRegExp', () => {
    it('should return true for RegExp objects and false for others', () => {
      expect(isRegExp(/a/)).toBe(true);
      expect(isRegExp(new RegExp('a'))).toBe(true);
      expect(isRegExp('/a/')).toBe(false);
    });
  });
});
