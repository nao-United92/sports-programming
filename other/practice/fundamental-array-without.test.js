const without = require('./fundamental-array-without');

describe('without', () => {
  test('returns an array without the specified values', () => {
    expect(without([1, 2, 3, 1, 2, 3], 1, 2)).toEqual([3, 3]);
  });

  test('returns the same array if no values to exclude are provided', () => {
    expect(without([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('returns an empty array when all elements are excluded', () => {
    expect(without([1, 1], 1)).toEqual([]);
  });
});
