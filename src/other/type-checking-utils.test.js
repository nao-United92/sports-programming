import { isString, isNumber, isBoolean, isFunction, isObject, isArray, isNull, isUndefined, isPlainObject, isEmpty, isPromise, isIterable } from './type-checking-utils.js';

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

  describe('isPlainObject', () => {
    test('should return true for plain objects', () => {
      expect(isPlainObject({})).toBe(true);
      expect(isPlainObject({ a: 1 })).toBe(true);
      expect(isPlainObject(Object.create(null))).toBe(true);
    });

    test('should return false for non-plain objects', () => {
      expect(isPlainObject([])).toBe(false);
      expect(isPlainObject(new Date())).toBe(false);
      expect(isPlainObject(null)).toBe(false);
      expect(isPlainObject(undefined)).toBe(false);
      expect(isPlainObject(123)).toBe(false);
      expect(isPlainObject('string')).toBe(false);
      expect(isPlainObject(true)).toBe(false);
    });
  });

  describe('isEmpty', () => {
    test('should return true for empty strings', () => {
      expect(isEmpty('')).toBe(true);
    });

    test('should return true for empty arrays', () => {
      expect(isEmpty([])).toBe(true);
    });

    test('should return true for empty objects', () => {
      expect(isEmpty({})).toBe(true);
    });

    test('should return true for null and undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    test('should return false for non-empty strings', () => {
      expect(isEmpty('hello')).toBe(false);
    });

    test('should return false for non-empty arrays', () => {
      expect(isEmpty([1, 2])).toBe(false);
    });

    test('should return false for non-empty objects', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    test('should return false for numbers and booleans', () => {
      expect(isEmpty(0)).toBe(false);
      expect(isEmpty(123)).toBe(false);
      expect(isEmpty(true)).toBe(false);
      expect(isEmpty(false)).toBe(false);
    });
  });

  describe('isPromise', () => {
    test('should return true for a Promise', () => {
      expect(isPromise(Promise.resolve())).toBe(true);
      expect(isPromise(new Promise(() => {}))).toBe(true);
    });

    test('should return true for thenable objects', () => {
      const thenable = { then: () => {}, catch: () => {} };
      expect(isPromise(thenable)).toBe(true);
    });

    test('should return false for non-promises', () => {
      expect(isPromise(null)).toBe(false);
      expect(isPromise(undefined)).toBe(false);
      expect(isPromise(123)).toBe(false);
      expect(isPromise('string')).toBe(false);
      expect(isPromise({})).toBe(false);
      expect(isPromise({ then: () => {} })).toBe(false); // Missing catch
    });
  });

  describe('isIterable', () => {
    test('should return true for iterable values', () => {
      expect(isIterable([])).toBe(true);
      expect(isIterable('string')).toBe(true);
      expect(isIterable(new Map())).toBe(true);
      expect(isIterable(new Set())).toBe(true);
      expect(isIterable(new Int8Array())).toBe(true);
    });

    test('should return false for non-iterable values', () => {
      expect(isIterable(null)).toBe(false);
      expect(isIterable(undefined)).toBe(false);
      expect(isIterable(123)).toBe(false);
      expect(isIterable({})).toBe(false);
      expect(isIterable(true)).toBe(false);
    });
  });

  describe('isDate', () => {
    test('should return true for a valid Date object', () => {
      expect(isDate(new Date())).toBe(true);
      expect(isDate(new Date('2023-01-01'))).toBe(true);
    });

    test('should return false for an invalid Date object', () => {
      expect(isDate(new Date('invalid'))).toBe(false);
    });

    test('should return false for non-Date objects', () => {
      expect(isDate(null)).toBe(false);
      expect(isDate(undefined)).toBe(false);
      expect(isDate('2023-01-01')).toBe(false);
      expect(isDate(123)).toBe(false);
      expect(isDate({})).toBe(false);
    });
  });

  describe('isMap', () => {
    test('should return true for a Map object', () => {
      expect(isMap(new Map())).toBe(true);
      expect(isMap(new Map([['key', 'value']]))).toBe(true);
    });

    test('should return false for non-Map objects', () => {
      expect(isMap(null)).toBe(false);
      expect(isMap(undefined)).toBe(false);
      expect(isMap({})).toBe(false);
      expect(isMap([])).toBe(false);
      expect(isMap(new Set())).toBe(false);
      expect(isMap(new Date())).toBe(false);
      expect(isMap('string')).toBe(false);
      expect(isMap(123)).toBe(false);
    });
  });
});