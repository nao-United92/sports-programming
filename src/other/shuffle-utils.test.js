import { shuffle } from './shuffle-utils.js';

describe('shuffle', () => {
  test('should return an array with the same elements', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).toHaveLength(array.length);
    expect(shuffledArray.sort()).toEqual(array.sort());
  });

  test('should return a differently ordered array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffledArray = shuffle(array);
    // Note: This test has a small chance of failing if the shuffled array is the same as the original.
    expect(shuffledArray).not.toEqual(array);
  });

  test('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });
});