import shuffle from './array-shuffle.js';

describe('shuffle', () => {
  it('should return an array with the same length', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).toHaveLength(array.length);
  });

  it('should contain the same elements as the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled.sort()).toEqual(array.sort());
  });

  it('should not be the same as the original array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(array);
    // This test has a small chance of failing if the shuffled array is the same as the original
    expect(shuffled).not.toEqual(array);
  });

  it('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });
});
