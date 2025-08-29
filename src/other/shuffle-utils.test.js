import { shuffle } from './shuffle-utils.js';

describe('shuffle', () => {
  it('should return a new array with the same elements', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).toHaveLength(array.length);
    expect(shuffled.sort()).toEqual(array.sort());
  });

  it('should not modify the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const original = [...array];
    shuffle(array);
    expect(array).toEqual(original);
  });

  it('should return an empty array for an empty array input', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('should return an empty array for null or undefined input', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
  });
});
