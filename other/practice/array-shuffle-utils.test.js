// other/practice/array-shuffle-utils.test.js

const arrayShuffle = require('./array-shuffle-utils');

describe('arrayShuffle', () => {
  test('should return an array with the same elements as the original', () => {
    const originalArr = [1, 2, 3, 4, 5];
    const shuffledArr = arrayShuffle(originalArr);
    expect(shuffledArr).toHaveLength(originalArr.length);
    expect(shuffledArr.sort()).toEqual(originalArr.sort()); // Check if elements are the same
  });

  test('should return a new array instance', () => {
    const originalArr = [1, 2, 3];
    const shuffledArr = arrayShuffle(originalArr);
    expect(shuffledArr).not.toBe(originalArr); // Ensure it's a new array, not modified in place
  });

  test('should return an empty array if given an empty array', () => {
    expect(arrayShuffle([])).toEqual([]);
  });

  test('should return a single-element array if given a single-element array', () => {
    expect(arrayShuffle([1])).toEqual([1]);
  });

  // This test provides a weak check for randomness.
  // It's not a strong statistical test but ensures that the array is usually reordered.
  test('should reorder elements (statistical check)', () => {
    const originalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sameOrderCount = 0;
    const iterations = 1000;

    for (let i = 0; i < iterations; i++) {
      const shuffledArr = arrayShuffle(originalArr);
      if (shuffledArr.every((val, index) => val === originalArr[index])) {
        sameOrderCount++;
      }
    }
    // It's highly improbable for a shuffled array to be in the same order many times
    // For 10 elements, 1/10! is very small.
    // Allow a very small margin, but expect it to be different most of the time.
    expect(sameOrderCount).toBeLessThan(iterations / 100); // Expect less than 1% to be in same order
  });

  test('should handle arrays with mixed types', () => {
    const originalArr = [1, 'hello', { a: 1 }, null, undefined, [2, 3]];
    const shuffledArr = arrayShuffle(originalArr);
    expect(shuffledArr).toHaveLength(originalArr.length);

    // Deep equality check for elements
    // This requires a custom sort for objects and arrays to ensure stable comparison
    const customSort = (a, b) => {
      const stringA = JSON.stringify(a);
      const stringB = JSON.stringify(b);
      if (stringA < stringB) return -1;
      if (stringA > stringB) return 1;
      return 0;
    };
    expect([...shuffledArr].sort(customSort)).toEqual([...originalArr].sort(customSort));
  });
});