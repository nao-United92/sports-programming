const shuffleArray = require('./array-shuffle-utils');

describe('shuffleArray', () => {
  test('should return a new array with the same elements', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(originalArray);
    expect(shuffledArray).not.toBe(originalArray); // Should be a new array
    expect(shuffledArray.length).toBe(originalArray.length);
    expect(shuffledArray).toEqual(expect.arrayContaining(originalArray)); // Contains same elements
    expect(originalArray).toEqual(expect.arrayContaining(shuffledArray)); // Original array not modified
  });

  test('should return a shuffled array', () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffledArray = shuffleArray(originalArray);
    // It's highly unlikely that a truly shuffled array will be in the same order
    expect(shuffledArray).not.toEqual(originalArray);
  });

  test('should handle empty array', () => {
    expect(shuffleArray([])).toEqual([]);
  });

  test('should handle array with one element', () => {
    expect(shuffleArray([1])).toEqual([1]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => shuffleArray(null)).toThrow('Input must be an array.');
    expect(() => shuffleArray(undefined)).toThrow('Input must be an array.');
    expect(() => shuffleArray('string')).toThrow('Input must be an array.');
    expect(() => shuffleArray(123)).toThrow('Input must be an array.');
    expect(() => shuffleArray({})).toThrow('Input must be an array.');
  });

  test('should produce a different order most of the time (probabilistic)', () => {
    const originalArray = [1, 2, 3, 4, 5];
    let sameOrderCount = 0;
    const iterations = 1000; // Run many times to reduce chance of false positive
    for (let i = 0; i < iterations; i++) {
      const shuffled = shuffleArray(originalArray);
      if (shuffled.every((val, index) => val === originalArray[index])) {
        sameOrderCount++;
      }
    }
    // It's highly unlikely that it will be in the same order frequently
    expect(sameOrderCount).toBeLessThan(iterations / 10); // Expect less than 10% are in same order
  });
});