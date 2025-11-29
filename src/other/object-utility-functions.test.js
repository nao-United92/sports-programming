// src/other/object-utility-functions.test.js

const { isEmpty } = require('./object-utility-functions');

describe('Object Utility Functions', () => {
  describe('isEmpty', () => {
    test('should return true for null', () => {
      expect(isEmpty(null)).toBe(true);
    });

    test('should return true for undefined', () => {
      expect(isEmpty(undefined)).toBe(true);
    });

    test('should return true for an empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    test('should return false for a non-empty string', () => {
      expect(isEmpty('hello')).toBe(false);
    });

    test('should return true for an empty array', () => {
      expect(isEmpty([])).toBe(true);
    });

    test('should return false for a non-empty array', () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('should return true for an empty object', () => {
      expect(isEmpty({})).toBe(true);
    });

    test('should return false for a non-empty object', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    test('should return false for numbers', () => {
      expect(isEmpty(0)).toBe(false);
      expect(isEmpty(123)).toBe(false);
      expect(isEmpty(NaN)).toBe(false);
    });

    test('should return false for booleans', () => {
      expect(isEmpty(true)).toBe(false);
      expect(isEmpty(false)).toBe(false);
    });

    test('should return false for functions', () => {
      expect(isEmpty(() => {})).toBe(false);
    });

    test('should return false for Date objects', () => {
      expect(isEmpty(new Date())).toBe(false);
    });
  });
});
