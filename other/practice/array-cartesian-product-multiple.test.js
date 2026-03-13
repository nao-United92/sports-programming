const cartesianProductMultiple = require('./array-cartesian-product-multiple');

describe('cartesianProductMultiple', () => {
  test('calculates Cartesian product of two arrays', () => {
    expect(cartesianProductMultiple([1, 2], ['a', 'b'])).toEqual([
      [1, 'a'], [1, 'b'], [2, 'a'], [2, 'b'],
    ]);
  });

  test('calculates Cartesian product of three arrays', () => {
    expect(cartesianProductMultiple([1], [2], [3, 4])).toEqual([
      [1, 2, 3], [1, 2, 4],
    ]);
  });

  test('returns empty if any array is empty', () => {
    expect(cartesianProductMultiple([1, 2], [])).toEqual([]);
  });

  test('handles no arguments', () => {
    expect(cartesianProductMultiple()).toEqual([]);
  });
});
