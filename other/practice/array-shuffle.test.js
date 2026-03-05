const shuffle = require('./array-shuffle');

describe('shuffle', () => {
  test('returns an array with the same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(arr.length);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  test('does not mutate the original array', () => {
    const arr = [1, 2, 3];
    shuffle(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('returns an empty array for non-array input', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
  });

  test('shuffles the elements (probabilistic)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(arr);
    // There is a tiny chance this fails, but it's very unlikely with 10 elements.
    expect(shuffled).not.toEqual(arr);
  });
});
