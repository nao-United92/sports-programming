import { isEmptyArray, lastElement, removeElementFromArray, shuffleArray, uniqueArray, shuffle, flattenArray, sumArray } from './array-utils.js';

describe('array-utils', () => {
  describe('isEmptyArray', () => {
    it('should return true for an empty array', () => {
      expect(isEmptyArray([])).toBe(true);
    });

    it('should return false for a non-empty array', () => {
      expect(isEmptyArray([1, 2, 3])).toBe(false);
    });
  });

  describe('lastElement', () => {
    it('should return the last element of an array', () => {
      expect(lastElement([1, 2, 3])).toBe(3);
    });

    it('should return undefined for an empty array', () => {
      expect(lastElement([])).toBeUndefined();
    });
  });

  describe('removeElementFromArray', () => {
    it('should remove a specific element from an array', () => {
      expect(removeElementFromArray([1, 2, 3], 2)).toEqual([1, 3]);
    });
  });

  describe('shuffleArray', () => {
    it('should shuffle an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray([...arr]);
      expect(shuffled).not.toEqual(arr);
      expect(shuffled.sort()).toEqual(arr.sort());
    });
  });

  describe('uniqueArray', () => {
    it('should return an array with unique values', () => {
      expect(uniqueArray([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('shuffle', () => {
    it('should shuffle an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffle([...arr]);
      expect(shuffled).not.toEqual(arr);
      expect(shuffled.sort()).toEqual(arr.sort());
    });
  });

  describe('flattenArray', () => {
    it('should flatten a nested array', () => {
      expect(flattenArray([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array for non-array inputs', () => {
      expect(flattenArray(null)).toEqual([]);
      expect(flattenArray(undefined)).toEqual([]);
      expect(flattenArray(123)).toEqual([]);
    });
  });

  describe('sumArray', () => {
    it('should calculate the sum of numbers in an array', () => {
      expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    });

    it('should return 0 for an empty array', () => {
      expect(sumArray([])).toBe(0);
    });

    it('should return 0 for non-array inputs or arrays with non-numeric values', () => {
      expect(sumArray(null)).toBe(0);
      expect(sumArray(undefined)).toBe(0);
      expect(sumArray([1, 'a', 3])).toBe(0);
    });
  });
});