import { flatten, compact } from './array-manipulation-utils.js';

describe('Array Manipulation Utilities', () => {
  describe('flatten', () => {
    it('should flatten an array by one level by default', () => {
      const arr = [1, [2, [3, [4]]], 5];
      expect(flatten(arr)).toEqual([1, 2, [3, [4]], 5]);
    });

    it('should flatten an array to a specified depth', () => {
      const arr = [1, [2, [3, [4]]], 5];
      expect(flatten(arr, 2)).toEqual([1, 2, 3, [4], 5]);
    });

    it('should flatten an array completely with depth Infinity', () => {
      const arr = [1, [2, [3, [4]]], 5];
      expect(flatten(arr, Infinity)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array for non-array input', () => {
      expect(flatten(null)).toEqual([]);
      expect(flatten(undefined)).toEqual([]);
      expect(flatten(123)).toEqual([]);
    });

    it('should return an empty array for negative depth', () => {
      const arr = [1, [2]];
      expect(flatten(arr, -1)).toEqual([]);
    });
  });

  describe('compact', () => {
    it('should remove all falsey values from an array', () => {
      const arr = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN];
      expect(compact(arr)).toEqual([1, 2, 3, 'a']);
    });

    it('should return an empty array if all values are falsey', () => {
      const arr = [0, false, '', null, undefined, NaN];
      expect(compact(arr)).toEqual([]);
    });

    it('should return an empty array for non-array input', () => {
      expect(compact(null)).toEqual([]);
      expect(compact(undefined)).toEqual([]);
      expect(compact(123)).toEqual([]);
    });
  });
});