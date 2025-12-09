const { shuffle } = require('./array-shuffle-utils');

describe('shuffle', () => {
  test('should return an array with the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...arr]);
    expect(shuffled).toHaveLength(arr.length);
  });

  test('should return an array with the same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...arr]);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  test('should handle an empty array', () => {
    const arr = [];
    const shuffled = shuffle([...arr]);
    expect(shuffled).toEqual([]);
  });

  test('should handle an array with a single element', () => {
    const arr = [1];
    const shuffled = shuffle([...arr]);
    expect(shuffled).toEqual([1]);
  });

  test('should return a different order for a large array', () => {
    const arr = Array.from({ length: 100 }, (_, i) => i);
    const shuffled = shuffle([...arr]);
    // This test has a small chance of failing if the shuffled array is the same as the original.
    // For a 100-element array, this is extremely unlikely.
    expect(shuffled).not.toEqual(arr);
  });
});
