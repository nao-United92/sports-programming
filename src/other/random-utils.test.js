import { shuffle } from './random-utils.js';

describe('shuffle', () => {
  it('should return a new array with the same elements', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);
    expect(shuffledArray).not.toBe(originalArray); // Should be a new array
    expect(shuffledArray.sort()).toEqual(originalArray.sort()); // Should contain the same elements
  });

  it('should shuffle the array randomly', () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let isShuffled = false;
    // Run multiple times to increase confidence that it's truly random
    for (let i = 0; i < 10; i++) {
      const shuffledArray = shuffle(originalArray);
      if (!shuffledArray.every((val, index) => val === originalArray[index])) {
        isShuffled = true;
        break;
      }
    }
    expect(isShuffled).toBe(true);
  });

  it('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    expect(shuffle([1])).toEqual([1]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
    expect(shuffle(123)).toEqual([]);
    expect(shuffle('string')).toEqual([]);
  });
});
