const { chunk } = require('./array-chunk-divider-utils');

describe('chunk', () => {
  test('should divide an array into chunks of a specified size', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    expect(chunk(arr, 2)).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
  });

  test('should return the last chunk with remaining elements', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  test('should default to a chunk size of 1', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr)).toEqual([[1], [2], [3]]);
  });

  test('should return an empty array for invalid inputs', () => {
    expect(chunk(null)).toEqual([]);
    expect(chunk([], 2)).toEqual([]);
    expect(chunk([1, 2], 0)).toEqual([]);
    expect(chunk([1, 2], -1)).toEqual([]);
  });
});
