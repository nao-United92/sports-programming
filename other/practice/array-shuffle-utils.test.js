import { shuffle } from './array-shuffle-utils';

describe('shuffle', () => {
  const originalArray = [1, 2, 3, 4, 5];

  test('should return an array of the same length', () => {
    const shuffled = shuffle(originalArray);
    expect(shuffled.length).toBe(originalArray.length);
  });

  test('should contain the same elements as the original array', () => {
    const shuffled = shuffle(originalArray);
    expect(shuffled).toEqual(expect.arrayContaining(originalArray));
    expect(originalArray).toEqual(expect.arrayContaining(shuffled));
  });

  test('should not return the same array instance', () => {
    const shuffled = shuffle(originalArray);
    expect(shuffled).not.toBe(originalArray);
  });

  test('should shuffle the array (probabilistic test)', () => {
    // This test is probabilistic. There's a tiny chance it might fail even if the shuffle is correct.
    // For a small array, the chance of it being in the same order is higher.
    // For an array of 5 elements, there are 5! = 120 permutations.
    // So the chance of it being in the original order is 1/120.
    const results = [];
    for (let i = 0; i < 10; i++) { // Run multiple times to reduce false negatives
      const shuffled = shuffle(originalArray);
      results.push(shuffled);
    }
    // At least one shuffle should result in a different order
    const allSameOrder = results.every(result => JSON.stringify(result) === JSON.stringify(originalArray));
    expect(allSameOrder).toBe(false);
  });

  test('should handle empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should handle single element array', () => {
    expect(shuffle([1])).toEqual([1]);
  });
});