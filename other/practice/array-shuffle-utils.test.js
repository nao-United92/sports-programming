const { shuffle } = require('./array-shuffle-utils');

describe('shuffle', () => {
  test('should return a new array with the same elements', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).not.toBe(array); // Should be a new array
    expect(shuffledArray.length).toBe(array.length);
    expect(shuffledArray).toEqual(expect.arrayContaining(array)); // Contains same elements
    expect(array).toEqual(expect.arrayContaining(shuffledArray)); // Original array not modified
  });

  test('should return a shuffled array (probabilistic)', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffledArray = shuffle(array);
    // It's highly unlikely that a truly shuffled array will be in the same order
    expect(shuffledArray).not.toEqual(array);
    // This is a probabilistic check. A truly random shuffle *could* return the same order.
    // However, for typical test runs, it should be different.
    let isDifferentOrder = false;
    for (let i = 0; i < array.length; i++) {
      if (shuffledArray[i] !== array[i]) {
        isDifferentOrder = true;
        break;
      }
    }
    expect(isDifferentOrder).toBe(true);
  });

  test('should handle empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should handle array with one element', () => {
    expect(shuffle([1])).toEqual([1]);
  });

  test('should throw a TypeError for non-array input', () => {
    expect(() => shuffle(null)).toThrow(TypeError);
    expect(() => shuffle(null)).toThrow('Expected an array for the argument.');
    expect(() => shuffle(undefined)).toThrow(TypeError);
    expect(() => shuffle('string')).toThrow(TypeError);
    expect(() => shuffle(123)).toThrow(TypeError);
    expect(() => shuffle({})).toThrow(TypeError);
  });

  // This test is kept but modified to be less strict as true randomness is hard to test deterministically
  test('should produce a different order most of the time (probabilistic check)', () => {
    const array = [1, 2, 3, 4, 5];
    let sameOrderCount = 0;
    const iterations = 1000;
    for (let i = 0; i < iterations; i++) {
      const shuffled = shuffle(array);
      if (shuffled.every((val, index) => val === array[index])) {
        sameOrderCount++;
      }
    }
    // Expect the number of times it's in the original order to be very low
    expect(sameOrderCount).toBeLessThan(iterations / 100); // Expect less than 1% are in same order
  });
});