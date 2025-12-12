const { shuffle } = require('./array-shuffle-utils');

describe('shuffle', () => {
  test('should return an array with the same elements but in a different order', () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle(original);
    expect(shuffled).toHaveLength(original.length);
    expect(shuffled.sort()).toEqual(original.sort());
  });

  test('should return an empty array if the input is empty', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should return the same array if it has only one element', () => {
    expect(shuffle([1])).toEqual([1]);
  });

  test('should not modify the original array', () => {
    const original = [1, 2, 3];
    shuffle(original);
    expect(original).toEqual([1, 2, 3]);
  });

  test('should return an empty array if the input is not an array', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
    expect(shuffle(123)).toEqual([]);
    expect(shuffle('string')).toEqual([]);
    expect(shuffle({})).toEqual([]);
  });
});
