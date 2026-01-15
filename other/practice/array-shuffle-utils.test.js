import { shuffle } from './array-shuffle-utils.js';

describe('shuffle', () => {
  const arr = [1, 2, 3, 4, 5];

  test('should return an array with the same length', () => {
    expect(shuffle(arr)).toHaveLength(5);
  });

  test('should return an array with the same elements', () => {
    const shuffled = shuffle(arr);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  test('should not modify the original array', () => {
    const originalArr = [...arr];
    shuffle(arr);
    expect(originalArr).toEqual(arr);
  });
});