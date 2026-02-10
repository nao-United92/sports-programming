import shuffle from './array-shuffle';

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

  it('should not be the same as the original array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(arr);
    // This test has a small chance of failing if the shuffled array is the same as the original
    // but for a 10 element array, this is very unlikely.
    expect(shuffled).not.toEqual(arr);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const shuffled = shuffle(arr);
    expect(shuffled).toEqual([]);
  });

  test('should return an empty array if an empty array is provided', () => {
    const emptyArray = [];
    expect(arrayShuffle(emptyArray)).toEqual([]);
  });
});