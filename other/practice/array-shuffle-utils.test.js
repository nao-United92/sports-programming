import { shuffle } from './array-shuffle-utils.js';

describe('shuffle', () => {
  it('should return an array of the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle(arr);
    expect(shuffledArr.length).toBe(arr.length);
  });

  it('should contain the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle(arr);
    expect(shuffledArr.sort()).toEqual(arr.sort());
  });

  it('should not mutate the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArr = [...arr];
    shuffle(arr);
    expect(arr).toEqual(originalArr);
  });

  it('should return a different order for a non-empty array (probabilistic)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Larger array to increase probability of different order
    let isDifferent = false;
    for (let i = 0; i < 10; i++) { // Try multiple times
      if (JSON.stringify(shuffle(arr)) !== JSON.stringify(arr)) {
        isDifferent = true;
        break;
      }
    }
    expect(isDifferent).toBe(true);
  });

  it('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('should handle an array with one element', () => {
    expect(shuffle([1])).toEqual([1]);
  });
});