const shuffle = require('./array-shuffle');

describe('shuffle', () => {
  test('should return a new array with the same elements', () => {
    const originalArr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle(originalArr);
    expect(shuffledArr).not.toBe(originalArr); // Should return a new array
    expect(shuffledArr.length).toBe(originalArr.length);
    expect(shuffledArr).toEqual(expect.arrayContaining(originalArr));
    expect(originalArr).toEqual(expect.arrayContaining(shuffledArr));
  });

  test('should return an empty array if given an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should return a single-element array unchanged', () => {
    expect(shuffle([42])).toEqual([42]);
  });

  test('should sufficiently shuffle a larger array (probabilistic check)', () => {
    const originalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = [];
    let sameOrderCount = 0;

    for (let i = 0; i < 1000; i++) {
      const shuffled = shuffle(originalArr);
      results.push(shuffled.join(',')); // Convert to string for easy comparison
      if (shuffled.join(',') === originalArr.join(',')) {
        sameOrderCount++;
      }
    }

    // Expecting that it's highly unlikely to get the original order many times
    // This is a probabilistic test, may fail on rare occasions.
    expect(sameOrderCount).toBeLessThan(originalArr.length);

    // Expecting diverse shuffled results
    expect(new Set(results).size).toBeGreaterThan(1);
    expect(new Set(results).size).toBeGreaterThan(originalArr.length);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => shuffle(null)).toThrow('Argument must be an array.');
    expect(() => shuffle('string')).toThrow('Argument must be an array.');
    expect(() => shuffle(123)).toThrow('Argument must be an array.');
  });
});
