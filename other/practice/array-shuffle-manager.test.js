const { shuffle } = require('./array-shuffle-manager');

describe('shuffle', () => {
  it('should return an array with the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(arr.length);
  });

  it('should contain all original elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  it('should not be the same as the original array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(arr);
    // This test has a small chance of failing if the shuffled array is the same as the original
    expect(shuffled).not.toEqual(arr);
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
