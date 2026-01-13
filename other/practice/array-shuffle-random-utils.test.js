
import { shuffle } from './array-shuffle-random-utils.js';

describe('shuffle', () => {
  it('should return an array with the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(arr.length);
  });

  it('should contain the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  it('should handle an empty array', () => {
    const arr = [];
    const shuffled = shuffle(arr);
    expect(shuffled).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const arr = [1];
    const shuffled = shuffle(arr);
    expect(shuffled).toEqual([1]);
  });
});
