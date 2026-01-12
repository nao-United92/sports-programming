import { shuffle } from './array-shuffle-util';

describe('shuffle', () => {
  it('should return an array with the same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(arr.length);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  it('should not modify the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    shuffle(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array for an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('should return an empty array for non-array values', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
  });
});