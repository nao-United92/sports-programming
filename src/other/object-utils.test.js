import { deepClone, isEmpty } from './object-utils.js';

describe('object-utils', () => {
  describe('deepClone', () => {
    it('should deep clone a simple object', () => {
      const obj = { a: 1, b: { c: 2 } };
      const cloned = deepClone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
      expect(cloned.b).not.toBe(obj.b);
    });

    it('should deep clone an array within an object', () => {
      const obj = { a: [1, 2, { b: 3 }] };
      const cloned = deepClone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned.a).not.toBe(obj.a);
      expect(cloned.a[2]).not.toBe(obj.a[2]);
    });

    it('should handle null and primitive values', () => {
      expect(deepClone(null)).toBeNull();
      expect(deepClone(123)).toBe(123);
      expect(deepClone('hello')).toBe('hello');
    });

    it('should handle dates', () => {
        const obj = { d: new Date() };
        const cloned = deepClone(obj);
        expect(cloned.d.getTime()).toBe(obj.d.getTime());
        expect(cloned.d).not.toBe(obj.d);
    });
  });

  describe('isEmpty', () => {
    it('should return true for an empty object', () => {
      expect(isEmpty({})).toBe(true);
    });

    it('should return false for a non-empty object', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    it('should return true for null or undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    it('should return false for non-plain objects', () => {
        function MyObject() {}
        expect(isEmpty(new MyObject())).toBe(false);
        expect(isEmpty([])).toBe(false);
    });
  });
});