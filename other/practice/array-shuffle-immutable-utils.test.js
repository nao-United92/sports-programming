import { shuffleImmutable } from './array-shuffle-immutable-utils.js';

describe('shuffleImmutable', () => {
  it('should return an array with the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleImmutable(arr);
    expect(shuffled).toHaveLength(arr.length);
  });

  it('should contain the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleImmutable(arr);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  it('should return a new array, not modify the original', () => {
    const arr = [1, 2, 3, 4, 5];
    shuffleImmutable(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    expect(shuffleImmutable([])).toEqual([]);
  });
});
