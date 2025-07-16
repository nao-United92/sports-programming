import { isEmptyArray, lastElement, removeElementFromArray, shuffleArray, uniqueArray, shuffle } from './array-utils.js';

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
});