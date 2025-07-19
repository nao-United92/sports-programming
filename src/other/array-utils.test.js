import { isEmptyArray, lastElement, removeElementFromArray, shuffleArray, uniqueArray, shuffle, flattenArray, sumArray, chunkArray, removeFalsy, contains, intersection, difference, removeDuplicates } from './array-utils.js';

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

  describe('chunkArray', () => {
    it('should chunk an array into smaller arrays', () => {
      expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunkArray([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
      expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });

    it('should return an empty array for invalid inputs', () => {
      expect(chunkArray([], 2)).toEqual([]);
      expect(chunkArray([1, 2, 3], 0)).toEqual([]);
      expect(chunkArray(null, 2)).toEqual([]);
      expect(chunkArray(undefined, 2)).toEqual([]);
    });
  });

  describe('removeFalsy', () => {
    it('should remove falsy values from an array', () => {
      expect(removeFalsy([1, 0, true, false, '', null, undefined, NaN, 'hello'])).toEqual([1, true, 'hello']);
      expect(removeFalsy([0, false, '', null, undefined, NaN])).toEqual([]);
    });

    it('should return an empty array for non-array inputs', () => {
      expect(removeFalsy(null)).toEqual([]);
      expect(removeFalsy(undefined)).toEqual([]);
      expect(removeFalsy(123)).toEqual([]);
    });
  });

  describe('contains', () => {
    it('should return true if the array contains the element', () => {
      expect(contains([1, 2, 3], 2)).toBe(true);
    });

    it('should return false if the array does not contain the element', () => {
      expect(contains([1, 2, 3], 4)).toBe(false);
    });

    it('should handle non-array inputs', () => {
      expect(contains(null, 1)).toBe(false);
      expect(contains(undefined, 1)).toBe(false);
    });
  });

  describe('intersection', () => {
    it('should return common elements between two arrays', () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
      expect(intersection(['a', 'b'], ['b', 'c'])).toEqual(['b']);
      expect(intersection([1, 2], [3, 4])).toEqual([]);
    });

    it('should handle non-array inputs', () => {
      expect(intersection(null, [1, 2])).toEqual([]);
      expect(intersection([1, 2], undefined)).toEqual([]);
    });
  });

  describe('difference', () => {
    it('should return elements present in the first array but not in the second', () => {
      expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
      expect(difference(['a', 'b', 'c'], ['b'])).toEqual(['a', 'c']);
      expect(difference([1, 2], [3, 4])).toEqual([1, 2]);
    });

    it('should handle non-array inputs', () => {
      expect(difference(null, [1, 2])).toEqual([]);
      expect(difference([1, 2], undefined)).toEqual([]);
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicate values from an array', () => {
      expect(removeDuplicates([1, 1, 2, 3, 2, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(removeDuplicates(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
      expect(removeDuplicates([])).toEqual([]);
    });

    it('should handle non-array inputs', () => {
      expect(removeDuplicates(null)).toEqual([]);
      expect(removeDuplicates(undefined)).toEqual([]);
    });
  });
});