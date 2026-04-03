const chunkRecursive = require('./array-chunk-recursive');

describe('chunkRecursive', () => {
  test('splits array into correct sized chunks', () => {
    expect(chunkRecursive([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunkRecursive([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    expect(chunkRecursive([1, 2, 3], 4)).toEqual([[1, 2, 3]]);
  });

  test('returns the original array inside a wrapper for empty array', () => {
    expect(chunkRecursive([], 3)).toEqual([[]]);
  });
});
