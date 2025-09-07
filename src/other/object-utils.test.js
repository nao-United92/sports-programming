import { mapKeys, mapValues, omit } from './object-utils.js';

describe('Object Utilities', () => {
  describe('mapKeys', () => {
    it('should map keys of an object', () => {
      const obj = { a: 1, b: 2 };
      const fn = (value, key) => key + value;
      expect(mapKeys(obj, fn)).toEqual({ a1: 1, b2: 2 });
    });

    it('should handle an empty object', () => {
      const obj = {};
      const fn = (value, key) => key + value;
      expect(mapKeys(obj, fn)).toEqual({});
    });

    it('should work with more complex objects', () => {
      const obj = { 'barney': 36, 'fred': 40 };
      const fn = (value) => value + 10;
      expect(mapKeys(obj, fn)).toEqual({ '46': 36, '50': 40 });
    });
  });

  describe('mapValues', () => {
    it('should map values of an object', () => {
      const obj = { a: 1, b: 2 };
      const fn = (value) => value * 2;
      expect(mapValues(obj, fn)).toEqual({ a: 2, b: 4 });
    });

    it('should handle an empty object', () => {
      const obj = {};
      const fn = (value) => value * 2;
      expect(mapValues(obj, fn)).toEqual({});
    });

    it('should pass key and object to the iteratee', () => {
      const obj = { a: 1, b: 2 };
      const fn = (value, key, o) => key + o[key];
      expect(mapValues(obj, fn)).toEqual({ a: 'a1', b: 'b2' });
    });
  });

  describe('omit', () => {
    it('should omit specified keys from an object', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
    });

    it('should return a new object', () => {
      const obj = { a: 1, b: 2 };
      const result = omit(obj, ['a']);
      expect(result).not.toBe(obj);
    });

    it('should not modify the original object', () => {
      const obj = { a: 1, b: 2 };
      omit(obj, ['a']);
      expect(obj).toEqual({ a: 1, b: 2 });
    });

    it('should handle an empty keys array', () => {
      const obj = { a: 1, b: 2 };
      expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
    });

    it('should handle an empty object', () => {
      const obj = {};
      expect(omit(obj, ['a'])).toEqual({});
    });
  });
});
