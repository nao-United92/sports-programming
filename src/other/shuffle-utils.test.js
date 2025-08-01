
import { shuffle } from './shuffle-utils.js';

describe('shuffle', () => {
  test('should return an array of the same length', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle([...originalArray]);
    expect(shuffledArray.length).toBe(originalArray.length);
  });

  test('should contain the same elements as the original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle([...originalArray]);
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
  });

  test('should modify the array in place', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const arrayRef = originalArray;
    shuffle(originalArray);
    expect(originalArray).toBe(arrayRef);
  });

  test('should return an empty array if input is not an array', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
    expect(shuffle({})).toEqual([]);
    expect(shuffle('string')).toEqual([]);
  });

  test('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should produce a different order (probabilistically)', () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sameOrderCount = 0;
    const attempts = 100;

    for (let i = 0; i < attempts; i++) {
      const shuffledArray = shuffle([...originalArray]);
      if (JSON.stringify(shuffledArray) === JSON.stringify(originalArray)) {
        sameOrderCount++;
      }
    }
    // It's highly improbable for the array to remain in the same order many times
    // This test might rarely fail due to pure chance, but it's a good probabilistic check.
    expect(sameOrderCount).toBeLessThan(attempts / 5); // Expect less than 20% to be in the same order
  });
});
