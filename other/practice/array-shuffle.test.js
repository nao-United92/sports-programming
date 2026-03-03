const shuffle = require('./array-shuffle');

describe('array-shuffle', () => {
  test('shuffles an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(arr.length);
    expect(shuffled).toEqual(expect.arrayContaining(arr));
  });

  test('does not mutate the original array', () => {
    const arr = [1, 2, 3];
    const original = [...arr];
    shuffle(arr);
    expect(arr).toEqual(original);
  });

  test('handles empty arrays', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('handles non-array inputs', () => {
    expect(shuffle(null)).toBe(null);
    expect(shuffle(123)).toBe(123);
  });
});
