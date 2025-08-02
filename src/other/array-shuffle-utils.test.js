import { shuffle } from './array-shuffle-utils.js';

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
});