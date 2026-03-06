const findAllIndices = require('./array-find-all-indices');

describe('findAllIndices', () => {
  test('finds all indices of elements satisfying a predicate', () => {
    const arr = [1, 2, 3, 4, 1, 2, 1];
    expect(findAllIndices(arr, (n) => n === 1)).toEqual([0, 4, 6]);
    expect(findAllIndices(arr, (n) => n > 2)).toEqual([2, 3]);
  });

  test('returns empty array if no matches are found', () => {
    const arr = [1, 2, 3];
    expect(findAllIndices(arr, (n) => n === 10)).toEqual([]);
  });

  test('handles an empty array', () => {
    expect(findAllIndices([], (n) => n === 1)).toEqual([]);
  });

  test('passes index and original array to predicate', () => {
    const arr = [10, 20, 30];
    const predicate = jest.fn((val, idx) => idx > 0);
    expect(findAllIndices(arr, predicate)).toEqual([1, 2]);
    expect(predicate).toHaveBeenCalledTimes(3);
  });
});
