import { deepFlatten, difference } from './array-utils-extra.js';

describe('Array Utilities Extra', () => {
  describe('deepFlatten', () => {
    it('should flatten a nested array', () => {
      const nestedArray = [1, [2, [3, [4]], 5]];
      expect(deepFlatten(nestedArray)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array if given an empty array', () => {
      expect(deepFlatten([])).toEqual([]);
    });

    it('should handle arrays with no nesting', () => {
      expect(deepFlatten([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('difference', () => {
    it('should return the difference between two arrays', () => {
      const arr1 = [1, 2, 3, 4, 5];
      const arr2 = [3, 5];
      expect(difference(arr1, arr2)).toEqual([1, 2, 4]);
    });

    it('should return the first array if the second array is empty', () => {
      const arr1 = [1, 2, 3];
      expect(difference(arr1, [])).toEqual([1, 2, 3]);
    });

    it('should return an empty array if the first array is empty', () => {
      expect(difference([], [1, 2, 3])).toEqual([]);
    });

    it('should handle arrays with no common elements', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
      expect(difference(arr1, arr2)).toEqual([1, 2, 3]);
    });
  });
});
