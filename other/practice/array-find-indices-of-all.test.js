const findIndicesOfAll = require('./array-find-indices-of-all');

describe('findIndicesOfAll', () => {
  test('finds all indices matching the predicate', () => {
    expect(findIndicesOfAll([1, 2, 3, 2, 1], (x) => x === 2)).toEqual([1, 3]);
  });

  test('returns empty array if no matches', () => {
    expect(findIndicesOfAll([1, 2, 3], (x) => x === 4)).toEqual([]);
  });

  test('works with objects', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 1 }];
    expect(findIndicesOfAll(arr, (obj) => obj.id === 1)).toEqual([0, 2]);
  });

  test('handles empty array', () => {
    expect(findIndicesOfAll([], () => true)).toEqual([]);
  });
});
