import { deepClone, isEmpty, get } from './object-helpers.js';

describe('Object Helpers', () => {
  describe('deepClone', () => {
    test('should create a deep clone of an object', () => {
      const obj = { a: 1, b: { c: 2, d: [3, 4] } };
      const clone = deepClone(obj);
      expect(clone).toEqual(obj);
      expect(clone).not.toBe(obj);
      expect(clone.b).not.toBe(obj.b);
      expect(clone.b.d).not.toBe(obj.b.d);
    });
  });

  describe('isEmpty', () => {
    test('should return true for an empty object', () => {
      expect(isEmpty({})).toBe(true);
    });

    test('should return false for a non-empty object', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    test('should return false for non-objects', () => {
      expect(isEmpty(null)).toBe(false);
      expect(isEmpty([])).toBe(false);
      expect(isEmpty('a')).toBe(false);
    });
  });

  describe('get', () => {
    const obj = { a: { b: { c: 1 } }, d: [2, 3] };

    test('should get a nested property', () => {
      expect(get(obj, 'a.b.c')).toBe(1);
    });

    test('should get an array property', () => {
      expect(get(obj, 'd')).toEqual([2, 3]);
    });

    test('should return default value for non-existent path', () => {
      expect(get(obj, 'a.x.y', 'default')).toBe('default');
    });

    test('should return undefined for non-existent path without default value', () => {
      expect(get(obj, 'a.x.y')).toBeUndefined();
    });
  });
});
