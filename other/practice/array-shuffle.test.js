const shuffle = require('./array-shuffle');

describe('shuffle', () => {
  test('should return a new array with the same elements but in a different order', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);

    // Ensure it's a new array instance
    expect(shuffledArray).not.toBe(originalArray);

    // Ensure all elements are still present
    expect(shuffledArray.sort()).toEqual(originalArray.sort());

    // With a reasonable probability, the array should be different (not guaranteed)
    // This test might occasionally fail due to pure chance, but it's rare.
    if (originalArray.length > 1) {
      expect(shuffledArray).not.toEqual(originalArray);
    }
  });

  test('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should handle an array with a single element', () => {
    expect(shuffle([1])).toEqual([1]);
  });

  test('should handle array with duplicate elements', () => {
    const originalArray = [1, 1, 2, 2, 3];
    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray).not.toBe(originalArray);
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
  });
});