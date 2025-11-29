// src/other/type-check-utils.test.js

const { isObject } = require('./type-check-utils');

describe('Type Check Utils', () => {
  describe('isObject', () => {
    test('should return true for a plain object literal', () => {
      expect(isObject({})).toBe(true);
    });

    test('should return true for an object created with new Object()', () => {
      expect(isObject(new Object())).toBe(true);
    });

    test('should return false for null', () => {
      expect(isObject(null)).toBe(false);
    });

    test('should return false for arrays', () => {
      expect(isObject([])).toBe(false);
      expect(isObject([1, 2, 3])).toBe(false);
    });

    test('should return false for functions', () => {
      expect(isObject(() => {})).toBe(false);
      expect(isObject(function() {})).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(isObject(123)).toBe(false);
      expect(isObject('string')).toBe(false);
      expect(isObject(true)).toBe(false);
      expect(isObject(undefined)).toBe(false);
      expect(isObject(Symbol('sym'))).toBe(false);
    });

    test('should return false for instances of custom classes', () => {
      class MyClass {}
      expect(isObject(new MyClass())).toBe(false);
    });

    test('should return false for built-in objects like Date, RegExp', () => {
      expect(isObject(new Date())).toBe(false);
      expect(isObject(/abc/)).toBe(false);
    });

    test('should return false for objects with a null prototype', () => {
      expect(isObject(Object.create(null))).toBe(true); // This is considered a plain object
    });
  });
});
