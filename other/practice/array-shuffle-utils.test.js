const { shuffle } = require('./array-shuffle-utils');

describe('shuffle', () => {
  test('should return an array with the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(arr.length);
  });

  test('should contain the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const arrCopy = [...arr];
    shuffle(arr);
    expect(arr).toEqual(arrCopy);
  });

  test('should return a new array instance', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).not.toBe(arr);
  });
  
  test('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should handle non-array inputs', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
    expect(shuffle({})).toEqual([]);
  });
});
