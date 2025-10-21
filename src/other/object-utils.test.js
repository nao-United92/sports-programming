import { deepClone, isEmpty } from './object-utils';

describe('Object Utilities', () => {
  describe('deepClone', () => {
    it('should deep clone a simple object', () => {
      const obj = { a: 1, b: 'hello' };
      const clonedObj = deepClone(obj);
      expect(clonedObj).toEqual(obj);
      expect(clonedObj).not.toBe(obj);
    });

    it('should deep clone an object with nested objects', () => {
      const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
      const clonedObj = deepClone(obj);
      expect(clonedObj).toEqual(obj);
      expect(clonedObj).not.toBe(obj);
      expect(clonedObj.b).not.toBe(obj.b);
      expect(clonedObj.b.d).not.toBe(obj.b.d);
    });

    it('should deep clone an array', () => {
      const arr = [1, 2, { a: 3 }];
      const clonedArr = deepClone(arr);
      expect(clonedArr).toEqual(arr);
      expect(clonedArr).not.toBe(arr);
      expect(clonedArr[2]).not.toBe(arr[2]);
    });

    it('should deep clone an array with nested arrays', () => {
      const arr = [1, [2, [3]]];
      const clonedArr = deepClone(arr);
      expect(clonedArr).toEqual(arr);
      expect(clonedArr).not.toBe(arr);
      expect(clonedArr[1]).not.toBe(arr[1]);
      expect(clonedArr[1][1]).not.toBe(arr[1][1]);
    });

    it('should handle null and undefined', () => {
      expect(deepClone(null)).toBeNull();
      expect(deepClone(undefined)).toBeUndefined();
    });

    it('should handle primitive values', () => {
      expect(deepClone(123)).toBe(123);
      expect(deepClone('string')).toBe('string');
      expect(deepClone(true)).toBe(true);
    });
  });

  describe('isEmpty', () => {
    it('should return true for an empty object', () => {
      expect(isEmpty({})).toBe(true);
    });

    it('should return false for a non-empty object', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    it('should return true for null', () => {
      expect(isEmpty(null)).toBe(true);
    });

    it('should return true for undefined', () => {
      expect(isEmpty(undefined)).toBe(true);
    });

    it('should return true for primitive values', () => {
      expect(isEmpty(123)).toBe(true);
      expect(isEmpty('hello')).toBe(true);
      expect(isEmpty(true)).toBe(true);
    });

    it('should return false for an array with elements', () => {
      expect(isEmpty([1, 2])).toBe(false);
    });

    it('should return true for an empty array', () => {
      expect(isEmpty([])).toBe(true);
    });
  });
});
