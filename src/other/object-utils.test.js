import { mapKeys, mapValues } from './object-utils.js';

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
});
