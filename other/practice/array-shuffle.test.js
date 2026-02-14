const { shuffle } = require('./array-shuffle');

describe('shuffle', () => {
  test('should return a new array', () => {
    const originalArray = [1, 2, 3];
    const shuffledArray = shuffle(originalArray);
    expect(shuffledArray).not.toBe(originalArray); // Should not be the same reference
  });

  test('should not modify the original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const originalArrayCopy = [...originalArray];
    shuffle(originalArray);
    expect(originalArray).toEqual(originalArrayCopy);
  });

  test('should have the same length as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled.length).toBe(arr.length);
  });

  test('should contain all the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    // Sort both arrays to compare their contents
    expect([...shuffled].sort()).toEqual([...arr].sort());
  });

  test('should return an empty array if given an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should return an array with one element if given an array with one element', () => {
    expect(shuffle([1])).toEqual([1]);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => shuffle('not an array')).toThrow(TypeError);
    expect(() => shuffle(null)).toThrow(TypeError);
    expect(() => shuffle(undefined)).toThrow(TypeError);
    expect(() => shuffle(123)).toThrow(TypeError);
    expect(() => shuffle({})).toThrow(TypeError);
  });

  // This test has a small chance of failing due to randomness,
  // but it's important to ensure the array is actually shuffled.
  test('should actually shuffle the array (probabilistically)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let isShuffled = false;
    for (let i = 0; i < 10; i++) { // Try multiple times
      const shuffled = shuffle(arr);
      if (!shuffled.every((val, index) => val === arr[index])) {
        isShuffled = true;
        break;
      }
    }
    expect(isShuffled).toBe(true);
  });
});
