const shuffle = require('./array-shuffle-utils');

describe('shuffle', () => {
  test('should return an array of the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle([...arr]); // Use a copy to avoid modifying original
    expect(shuffledArr.length).toBe(arr.length);
  });

  test('should contain the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle([...arr]);
    expect(shuffledArr.sort()).toEqual(arr.sort());
  });

  test('should modify the array in place', () => {
    const arr = [1, 2, 3];
    const originalRef = arr;
    const shuffledArr = shuffle(arr);
    expect(shuffledArr).toBe(originalRef);
  });

  test('should return an empty array if given an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => shuffle(null)).toThrow('Expected an array');
    expect(() => shuffle(123)).toThrow('Expected an array');
    expect(() => shuffle('string')).toThrow('Expected an array');
    expect(() => shuffle({})).toThrow('Expected an array');
  });

  // Due to the random nature, it's hard to test for "randomness" deterministically.
  // We can only check for properties of a shuffle (same elements, same length).
  // A simple sanity check for difference:
  test('should typically not return the same order for a larger array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffledArr = shuffle([...arr]);
    // There's a tiny chance it could be the same, but highly unlikely for a decent-sized array
    expect(shuffledArr).not.toEqual(arr);
  });
});
