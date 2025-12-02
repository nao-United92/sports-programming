import { deepClone, isEmpty, isEqual } from './object-utils.js';

describe('Object Utilities', () => {
  describe('deepClone', () => {
    it('should deep clone a simple object', () => {
      const obj = { a: 1, b: 'hello' };
      const cloned = deepClone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
    });

    it('should deep clone a nested object', () => {
      const obj = { a: 1, b: { c: 2, d: [1, 2, 3] } };
      const cloned = deepClone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
      expect(cloned.b).not.toBe(obj.b);
      expect(cloned.b.d).not.toBe(obj.b.d);
    });

    it('should handle arrays', () => {
      const arr = [{ a: 1 }, { b: 2 }];
      const cloned = deepClone(arr);
      expect(cloned).toEqual(arr);
      expect(cloned).not.toBe(arr);
      expect(cloned[0]).not.toBe(arr[0]);
    });

    it('should handle dates', () => {
      const obj = { d: new Date() };
      const cloned = deepClone(obj);
      expect(cloned.d.getTime()).toBe(obj.d.getTime());
      expect(cloned.d).not.toBe(obj.d);
    });

    it('should handle null and primitives', () => {
      expect(deepClone(null)).toBeNull();
      expect(deepClone(123)).toBe(123);
      expect(deepClone('abc')).toBe('abc');
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

    it('should return false for arrays and other types', () => {
      expect(isEmpty([])).toBe(false);
      expect(isEmpty(new Date())).toBe(false);
    });
  });

  describe('isEqual', () => {
    it('should return true for identical primitives', () => {
      expect(isEqual(1, 1)).toBe(true);
      expect(isEqual('a', 'a')).toBe(true);
      expect(isEqual(true, true)).toBe(true);
    });

    it('should return false for different primitives', () => {
      expect(isEqual(1, 2)).toBe(false);
      expect(isEqual('a', 'b')).toBe(false);
      expect(isEqual(true, false)).toBe(false);
    });

    it('should return true for deeply equal objects', () => {
      const obj1 = { a: 1, b: { c: [1, 2] } };
      const obj2 = { a: 1, b: { c: [1, 2] } };
      expect(isEqual(obj1, obj2)).toBe(true);
    });

    it('should return false for different objects', () => {
      const obj1 = { a: 1, b: { c: [1, 2] } };
      const obj2 = { a: 1, b: { c: [1, 3] } };
      expect(isEqual(obj1, obj2)).toBe(false);
    });
    
    it('should return false for objects with different keys', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, c: 2 };
        expect(isEqual(obj1, obj2)).toBe(false);
    });

    it('should return true for deeply equal arrays', () => {
      const arr1 = [1, [2, { a: 3 }]];
      const arr2 = [1, [2, { a: 3 }]];
      expect(isEqual(arr1, arr2)).toBe(true);
    });

    it('should return false for different arrays', () => {
      const arr1 = [1, [2, { a: 3 }]];
      const arr2 = [1, [2, { a: 4 }]];
      expect(isEqual(arr1, arr2)).toBe(false);
    });

    it('should handle null values', () => {
      expect(isEqual(null, null)).toBe(true);
      expect(isEqual({}, null)).toBe(false);
      expect(isEqual(null, {})).toBe(false);
    });
  });
});