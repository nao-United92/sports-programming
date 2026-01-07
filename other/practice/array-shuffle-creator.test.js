import { shuffle } from './array-shuffle-creator.js';

describe('shuffle', () => {
  it('should return an array with the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled.length).toBe(arr.length);
  });

  it('should contain the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  it('should not be the same as the original array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(arr);
    // This test has a small chance of failing if the shuffled array is the same as the original
    // but it's unlikely for a reasonably sized array.
    expect(shuffled).not.toEqual(arr);
  });

  it('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('should handle an array with one element', () => {
    expect(shuffle([1])).toEqual([1]);
  });
});
