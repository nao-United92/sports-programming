const shuffle = require('./array-shuffle-fisher-yates-utils').default;

describe('shuffle', () => {
  test('should return an array with the same elements but in a different order', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle([...originalArray]); // Use spread to avoid modifying original
    
    // Check if it contains the same elements
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
    // Check if length is the same
    expect(shuffledArray.length).toBe(originalArray.length);
    // It's highly unlikely to be in the exact same order for a sufficiently large array
    // This test might fail very rarely, but it's a good general check
    expect(shuffledArray).not.toEqual(originalArray); 
  });

  test('should return the same array instance (in-place modification)', () => {
    const originalArray = [1, 2, 3];
    const shuffledArray = shuffle(originalArray);
    expect(shuffledArray).toBe(originalArray);
  });

  test('should handle an empty array', () => {
    const emptyArray = [];
    expect(shuffle(emptyArray)).toEqual([]);
    expect(shuffle(emptyArray).length).toBe(0);
  });

  test('should handle an array with a single element', () => {
    const singleElementArray = [1];
    expect(shuffle(singleElementArray)).toEqual([1]);
    expect(shuffle(singleElementArray).length).toBe(1);
  });

  test('should not produce the same output for consecutive runs (randomness check)', () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = new Set();
    const numberOfRuns = 1000;
    
    for (let i = 0; i < numberOfRuns; i++) {
      // Create a fresh copy each time to ensure independent shuffles
      results.add(JSON.stringify(shuffle([...originalArray])));
    }
    // Expect many different permutations, so the set size should be greater than 1
    // For smaller arrays, it might be exactly 1 or a few, but for 10 elements, it should be many.
    expect(results.size).toBeGreaterThan(1); 
    // This is a probabilistic test, could fail extremely rarely
    // More robust randomness tests are complex and usually outside unit tests.
  });
});