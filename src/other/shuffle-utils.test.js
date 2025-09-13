import { shuffle } from './shuffle-utils.js';

describe('shuffle', () => {
  it('should shuffle the elements of the array', () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];
    const shuffledArray = shuffle(array);

    // The shuffled array should have the same elements as the original array.
    expect(shuffledArray).toHaveLength(originalArray.length);
    expect(shuffledArray.sort()).toEqual(originalArray.sort());

    // The shuffled array should not be the same as the original array.
    // This is not guaranteed, but it's very likely for an array of this size.
    expect(shuffledArray).not.toEqual(originalArray);
  });

  it('should handle an empty array', () => {
    const array = [];
    expect(shuffle(array)).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const array = [1];
    expect(shuffle(array)).toEqual([1]);
  });

  it('should handle non-array input', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
    expect(shuffle({})).toEqual([]);
    expect(shuffle(123)).toEqual([]);
  });
});