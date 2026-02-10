import { arrayShuffle } from './array-shuffle';

describe('arrayShuffle', () => {
  it('should shuffle an array without losing elements', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = arrayShuffle([...originalArray]); // Create a copy to not modify the original

    expect(shuffledArray.length).toBe(originalArray.length);
    expect(shuffledArray).not.toEqual(originalArray); // This might fail rarely, but is generally expected
    expect(shuffledArray.sort()).toEqual(originalArray.sort()); // Ensure all elements are present
  });

  it('should return the same array instance for in-place shuffling', () => {
    const arr = [1, 2, 3];
    const result = arrayShuffle(arr);
    expect(result).toBe(arr); // Check for same reference
  });

  it('should handle empty arrays', () => {
    const emptyArray = [];
    const shuffledEmptyArray = arrayShuffle(emptyArray);
    expect(shuffledEmptyArray).toEqual([]);
    expect(shuffledEmptyArray).toBe(emptyArray); // Should be the same reference
  });

  it('should handle arrays with a single element', () => {
    const singleElementArray = [1];
    const shuffledSingleElementArray = arrayShuffle(singleElementArray);
    expect(shuffledSingleElementArray).toEqual([1]);
    expect(shuffledSingleElementArray).toBe(singleElementArray); // Should be the same reference
  });

  it('should produce different order on multiple runs (high probability)', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = new Set();

    // Run multiple times to observe different shuffles
    for (let i = 0; i < 100; i++) {
      const shuffled = arrayShuffle([...array]);
      results.add(JSON.stringify(shuffled));
    }
    // With 10 elements, the probability of all 100 shuffles being identical is astronomically low.
    expect(results.size).toBeGreaterThan(1);
  });
});
