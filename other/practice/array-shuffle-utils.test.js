import { shuffle } from './array-shuffle-utils';

describe('shuffle', () => {
  it('should return an array with the same elements', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).toHaveLength(array.length);
    expect(shuffled.sort()).toEqual(array.sort());
  });

  it('should return a new array, not modify the original', () => {
    const array = [1, 2, 3];
    const original = [...array];
    shuffle(array);
    expect(array).toEqual(original);
  });

  it('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('should handle a null or undefined array', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
  });

  it('should return an array that is likely not in the same order', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(array);
    // This is not a guaranteed test, but it makes a failure very unlikely for a correct implementation.
    expect(shuffled).not.toEqual(array);
  });
});