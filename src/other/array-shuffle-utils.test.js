import { shuffle, chunkArray } from './array-shuffle-utils.js';

describe('Array Shuffle Utilities', () => {
  describe('shuffle', () => {
    test('should return a new array with the same elements', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const shuffledArray = shuffle(originalArray);

      expect(shuffledArray).not.toBe(originalArray); // Should be a new array
      expect(shuffledArray.length).toBe(originalArray.length);
      expect(shuffledArray).toEqual(expect.arrayContaining(originalArray)); // Same elements
    });

    test('should return a randomly ordered array (probabilistic test)', () => {
      const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let isShuffled = false;
      for (let i = 0; i < 100; i++) { // Run multiple times to increase confidence
        const shuffledArray = shuffle(originalArray);
        if (shuffledArray.join(',') !== originalArray.join(',')) {
          isShuffled = true;
          break;
        }
      }
      expect(isShuffled).toBe(true);
    });

    test('should handle an empty array', () => {
      expect(shuffle([])).toEqual([]);
    });

    test('should handle an array with a single element', () => {
      expect(shuffle([1])).toEqual([1]);
    });

    test('should handle non-array input gracefully', () => {
      expect(shuffle(null)).toEqual([]);
      expect(shuffle(undefined)).toEqual([]);
      expect(shuffle('string')).toEqual([]);
      expect(shuffle(123)).toEqual([]);
      expect(shuffle({})).toEqual([]);
    });
  });

  describe('chunkArray', () => {
    test('should chunk an array into smaller arrays of specified size', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect(chunkArray(array, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    });

    test('should handle a size that does not evenly divide the array', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect(chunkArray(array, 4)).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9]]);
    });

    test('should return an empty array if input array is empty', () => {
      expect(chunkArray([], 3)).toEqual([]);
    });

    test('should return an empty array if size is zero or negative', () => {
      const array = [1, 2, 3];
      expect(chunkArray(array, 0)).toEqual([]);
      expect(chunkArray(array, -1)).toEqual([]);
    });

    test('should return an empty array if input is not an array', () => {
      expect(chunkArray(null, 3)).toEqual([]);
      expect(chunkArray(undefined, 3)).toEqual([]);
      expect(chunkArray('string', 3)).toEqual([]);
      expect(chunkArray(123, 3)).toEqual([]);
      expect(chunkArray({}, 3)).toEqual([]);
    });

    test('should return the original array as a single chunk if size is larger than array length', () => {
      const array = [1, 2, 3];
      expect(chunkArray(array, 5)).toEqual([[1, 2, 3]]);
    });
  });
});