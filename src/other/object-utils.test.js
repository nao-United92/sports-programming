import { isEmptyObject, deepMerge, getObjectKeys, getObjectValues } from './object-utils.js';

describe('object-utils', () => {
  describe('isEmptyObject', () => {
    it('should return true for an empty object', () => {
      expect(isEmptyObject({})).toBe(true);
    });

    it('should return false for a non-empty object', () => {
      expect(isEmptyObject({ a: 1 })).toBe(false);
    });
  });

  describe('deepMerge', () => {
    it('should deeply merge two objects', () => {
      const obj1 = { a: { b: 1 } };
      const obj2 = { a: { c: 2 } };
      expect(deepMerge(obj1, obj2)).toEqual({ a: { b: 1, c: 2 } });
    });
  });

  describe('getObjectKeys', () => {
    it('should return an array of an object\'s keys', () => {
      expect(getObjectKeys({ a: 1, b: 2 })).toEqual(['a', 'b']);
    });
  });

  describe('getObjectValues', () => {
    it('should return an array of an object\'s values', () => {
      expect(getObjectValues({ a: 1, b: 2 })).toEqual([1, 2]);
    });
  });
});
