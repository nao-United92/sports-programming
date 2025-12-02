import { deepClone, isEmpty, get } from './object-utils.js';

describe('Object Utilities', () => {
  describe('deepClone', () => {
    it('should deep clone a simple object', () => {
      const obj = { a: 1, b: { c: 2 } };
      const clone = deepClone(obj);
      expect(clone).toEqual(obj);
      expect(clone).not.toBe(obj);
      expect(clone.b).not.toBe(obj.b);
    });

    it('should deep clone an array', () => {
      const arr = [1, [2, 3]];
      const clone = deepClone(arr);
      expect(clone).toEqual(arr);
      expect(clone).not.toBe(arr);
      expect(clone[1]).not.toBe(arr[1]);
    });

    it('should handle null and primitive values', () => {
      expect(deepClone(null)).toBeNull();
      expect(deepClone(42)).toBe(42);
      expect(deepClone('hello')).toBe('hello');
    });
  });

  describe('isEmpty', () => {
    it('should return true for an empty object', () => {
      expect(isEmpty({})).toBe(true);
    });

    it('should return false for a non-empty object', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    it('should return true for null and undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    it('should return true for non-object types', () => {
        expect(isEmpty(123)).toBe(true);
        expect(isEmpty("string")).toBe(true);
    });
  });

  describe('get', () => {
    const obj = { a: { b: { c: 1 } }, d: [2, { e: 3 }] };

    it('should get a nested property using a string path', () => {
      expect(get(obj, 'a.b.c')).toBe(1);
    });

    it('should get a nested property using an array path', () => {
      expect(get(obj, ['a', 'b', 'c'])).toBe(1);
    });

    it('should get an array element', () => {
      expect(get(obj, 'd[0]')).toBe(2);
    });
    
    it('should get a property from an object in an array', () => {
        expect(get(obj, 'd[1].e')).toBe(3);
    });

    it('should return undefined for a non-existent path', () => {
      expect(get(obj, 'a.x.y')).toBeUndefined();
    });

    it('should return the default value for a non-existent path', () => {
      expect(get(obj, 'a.x.y', 'default')).toBe('default');
    });

    it('should return undefined for a path that goes through a primitive', () => {
      expect(get(obj, 'a.b.c.d')).toBeUndefined();
    });
  });
});
