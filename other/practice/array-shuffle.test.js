import { shuffle } from './array-shuffle.js';

describe('shuffle', () => {
  test('returns an array with the same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle(arr);
    expect(result.sort()).toEqual(arr.sort());
  });

  test('does not modify the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const arrCopy = [...arr];
    shuffle(arr);
    expect(arr).toEqual(arrCopy);
  });

  test('returns an empty array for an empty array input', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('shuffles the elements (statistically, may fail but very unlikely for this size)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = shuffle(arr);
    // There is a 1/10! chance this will be equal, which is 1/3,628,800.
    // So it's safe to assume it will be different most of the time.
    expect(result).not.toEqual(arr);
  });
});
