const { shuffle } = require('./shuffle-utils.js');

describe('shuffle', () => {
  test('should shuffle an array', () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];
    const shuffledArray = shuffle(array);

    // The shuffled array should have the same elements as the original array.
    expect(shuffledArray).toHaveLength(originalArray.length);
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
  });

  test('should modify the original array', () => {
    const array = [1, 2, 3, 4, 5];
    shuffle(array);
    // The array is shuffled in place, so it should be different from the original.
    // This test might fail in rare cases where the shuffled array is the same as the original.
    expect(array).not.toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    const array = [];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).toEqual([]);
  });
});
