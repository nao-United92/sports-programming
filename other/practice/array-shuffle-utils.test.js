import { shuffle } from './array-shuffle-utils.js';

describe('shuffle', () => {
  test('should return an array with the same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(arr.length);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    shuffle(arr);
    expect(arr).toEqual(originalArr);
  });

  test('should return a new array instance', () => {
    const arr = [1, 2, 3];
    const shuffled = shuffle(arr);
    expect(shuffled).not.toBe(arr);
  });

  test('should handle an empty array', () => {
    const arr = [];
    const shuffled = shuffle(arr);
    expect(shuffled).toEqual([]);
  });

  test('should handle non-array input by returning it as is', () => {
    const notAnArray = { a: 1 };
    const result = shuffle(notAnArray);
    expect(result).toBe(notAnArray);
  });
});
