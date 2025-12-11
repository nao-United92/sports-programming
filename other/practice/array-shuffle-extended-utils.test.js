const shuffle = require('./array-shuffle-extended-utils');

describe('shuffle', () => {
  let originalMathRandom;

  beforeEach(() => {
    originalMathRandom = Math.random;
    // Mock Math.random to return predictable values for some tests
    // This allows for deterministic testing of the shuffling algorithm itself.
  });

  afterEach(() => {
    Math.random = originalMathRandom; // Restore original Math.random
  });

  test('should return an array of the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled.length).toBe(arr.length);
  });

  test('should contain the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled.sort()).toEqual(arr.sort()); // Check elements, not order
  });

  test('should return a new array instance', () => {
    const arr = [1, 2, 3];
    const shuffled = shuffle(arr);
    expect(shuffled).not.toBe(arr);
  });

  test('should return a noticeably different order for larger arrays (probabilistic)', () => {
    const arr = Array.from({
      length: 100
    }, (_, i) => i);
    let sameOrderCount = 0;
    // Run multiple times to reduce false negatives
    for (let i = 0; i < 10; i++) {
      const shuffled = shuffle(arr);
      if (shuffled.every((val, idx) => val === arr[idx])) {
        sameOrderCount++;
      }
    }
    // It's highly unlikely to get the same order even once for 100 elements
    expect(sameOrderCount).toBeLessThan(2);
  });

  test('should handle empty arrays', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should handle single element arrays', () => {
    expect(shuffle([1])).toEqual([1]);
  });

  test('should return an empty array for non-array input', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
    expect(shuffle(123)).toEqual([]);
    expect(shuffle('string')).toEqual([]);
    expect(shuffle({
      a: 1
    })).toEqual([]);
  });

  test('should shuffle deterministically with mocked Math.random', () => {
    const arr = [1, 2, 3, 4, 5];
    // Sequence of Math.random values to ensure specific swaps
    // For Fisher-Yates, randomIndex = Math.floor(Math.random() * currentIndex);
    // If currentIndex = 5, we want randomIndex = 0, 1, 2, 3, 4.
    // If Math.random() returns 0.1, randomIndex for currentIndex 5 is 0.
    // If Math.random() returns 0.3, randomIndex for currentIndex 4 is 1.2 -> 1.
    // Let's force a known sequence:
    const randomValues = [0.1, 0.3, 0.5, 0.7, 0.9]; // Example values
    let callCount = 0;
    Math.random = jest.fn(() => {
      const val = randomValues[callCount % randomValues.length];
      callCount++;
      return val;
    });

    // Expected outcome:
    // Original: [1, 2, 3, 4, 5]
    // 1. currentIndex = 5. random(0.1) -> randomIndex = 0. Swap arr[4] and arr[0]
    //    [5, 2, 3, 4, 1]
    // 2. currentIndex = 4. random(0.3) -> randomIndex = 1. Swap arr[3] and arr[1]
    //    [5, 4, 3, 2, 1]
    // 3. currentIndex = 3. random(0.5) -> randomIndex = 1. Swap arr[2] and arr[1] (no change here from 3.9)
    //    [5, 4, 3, 2, 1] - Oops, randomIndex for current 3, random is 0.5, so index is 1. arr[2] and arr[1] are [3,4], so swap means [5,3,4,2,1]
    // Let's rethink the expected outcome
    // Initial: [1, 2, 3, 4, 5]
    // Iter 1: currentIdx=4 (shuffled.length - 1 = 4). randomIndex = floor(0.1 * 5) = 0. Swap [4] and [0].
    //   -> [5, 2, 3, 4, 1]
    // Iter 2: currentIdx=3. randomIndex = floor(0.3 * 4) = 1. Swap [3] and [1].
    //   -> [5, 4, 3, 2, 1]
    // Iter 3: currentIdx=2. randomIndex = floor(0.5 * 3) = 1. Swap [2] and [1].
    //   -> [5, 3, 4, 2, 1]
    // Iter 4: currentIdx=1. randomIndex = floor(0.7 * 2) = 1. Swap [1] and [1].
    //   -> [5, 3, 4, 2, 1]
    // Iter 5: currentIdx=0. randomIndex = floor(0.9 * 1) = 0. Swap [0] and [0].
    //   -> [5, 3, 4, 2, 1]

    const shuffled = shuffle(arr);
    expect(shuffled).toEqual([5, 3, 4, 2, 1]);
    expect(Math.random).toHaveBeenCalledTimes(5);
  });
});
