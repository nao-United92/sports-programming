import { shuffle } from './array-shuffle-utils.js';

describe('shuffle', () => {
  test('should return a new array with the same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle(arr);
    expect(result).not.toBe(arr); // Should be a new array
    expect(result.sort()).toEqual(arr.sort()); // Should contain the same elements
  });

  test('should return an empty array for an empty input', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should handle non-array input', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
    expect(shuffle(123)).toEqual([]);
  });
});
