import { shuffleArray } from './array-shuffle-utils';

describe('shuffleArray', () => {
  test('should return an array of the same length', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray([...originalArray]);
    expect(shuffledArray.length).toBe(originalArray.length);
  });

  test('should contain the same elements as the original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray([...originalArray]);
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
  });

  test('should return a different order for a non-empty array (probabilistic)', () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let isShuffled = false;
    // Run multiple times to increase probability of different order
    for (let i = 0; i < 10; i++) {
      const shuffledArray = shuffleArray([...originalArray]);
      if (!shuffledArray.every((val, index) => val === originalArray[index])) {
        isShuffled = true;
        break;
      }
    }
    expect(isShuffled).toBe(true);
  });

  test('should handle an empty array', () => {
    const originalArray = [];
    const shuffledArray = shuffleArray([...originalArray]);
    expect(shuffledArray).toEqual([]);
  });

  test('should handle an array with one element', () => {
    const originalArray = [1];
    const shuffledArray = shuffleArray([...originalArray]);
    expect(shuffledArray).toEqual([1]);
  });

  test('should not modify the original array if a copy is passed', () => {
    const originalArray = [1, 2, 3];
    const arrayCopy = [...originalArray];
    shuffleArray(arrayCopy);
    expect(originalArray).toEqual([1, 2, 3]);
  });

  test('should return an empty array for non-array input', () => {
    expect(shuffleArray(null)).toEqual([]);
    expect(shuffleArray(undefined)).toEqual([]);
    expect(shuffleArray('string')).toEqual([]);
    expect(shuffleArray(123)).toEqual([]);
    expect(shuffleArray({})).toEqual([]);
  });
});
