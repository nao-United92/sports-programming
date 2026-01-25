const { shuffle } = require('./array-shuffle-in-place-utils');

describe('shuffle', () => {
  test('should return an array with the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(arr.length);
  });

  test('should return an array with the same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  test('should not mutate the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    shuffle(arr);
    expect(arr).toEqual(originalArr);
  });

  test('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should handle an array with one element', () => {
    expect(shuffle([1])).toEqual([1]);
  });
});