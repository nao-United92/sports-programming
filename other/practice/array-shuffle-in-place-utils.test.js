const shuffleInPlace = require('./array-shuffle-in-place-utils');

describe('shuffleInPlace', () => {
  test('should shuffle the array in place', () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrayToShuffle = [...originalArray];
    const shuffledArray = shuffleInPlace(arrayToShuffle);

    // Expect the array to have the same elements but in a different order (probabilistically)
    expect(shuffledArray).toHaveLength(originalArray.length);
    expect(shuffledArray.sort((a, b) => a - b)).toEqual(originalArray.sort((a, b) => a - b));

    // It should be the same array instance (shuffled in place)
    expect(shuffledArray).toBe(arrayToShuffle);

    // Probability of being exactly the same order is low for a large array
    // This is a probabilistic test, so it might fail rarely.
    // For smaller arrays, it's possible to get the same order.
    // We expect it to be different from original for a large enough array
    if (originalArray.length > 1) {
      expect(shuffledArray).not.toEqual(originalArray);
    }
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(shuffleInPlace(arr)).toEqual([]);
    expect(shuffleInPlace(arr)).toBe(arr); // Should still be same instance
  });

  test('should handle an array with a single element', () => {
    const arr = [1];
    expect(shuffleInPlace(arr)).toEqual([1]);
    expect(shuffleInPlace(arr)).toBe(arr); // Should still be same instance
  });

  test('should return an empty array if input is not an array', () => {
    expect(shuffleInPlace(null)).toEqual([]);
    expect(shuffleInPlace(undefined)).toEqual([]);
    expect(shuffleInPlace(123)).toEqual([]);
    expect(shuffleInPlace('string')).toEqual([]);
    expect(shuffleInPlace({})).toEqual([]);
  });

  test('should produce different order on multiple runs (probabilistically)', () => {
    const arr = [1, 2, 3, 4, 5];
    const firstShuffle = shuffleInPlace([...arr]);
    const secondShuffle = shuffleInPlace([...arr]);
    // It's possible for them to be the same, but very unlikely across many runs.
    // For a robust test, one might run it many times and check statistical distribution.
    expect(firstShuffle).not.toEqual(secondShuffle); // This might fail rarely
  });
});
