const { chunk } = require('./array-chunk-extended-utils');

describe('chunk', () => {
  test('should create chunks of a specific size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    expect(chunk(array, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
  });

  test('should return the last chunk as remaining elements', () => {
    const array = [1, 2, 3, 4, 5];
    expect(chunk(array, 3)).toEqual([[1, 2, 3], [4, 5]]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(chunk([], 3)).toEqual([]);
  });

  test('should return an empty array if size is not a positive number', () => {
    const array = [1, 2, 3];
    expect(chunk(array, 0)).toEqual([]);
    expect(chunk(array, -1)).toEqual([]);
  });

  test('should return the full array in a single chunk if size is larger than array length', () => {
    const array = [1, 2, 3];
    expect(chunk(array, 5)).toEqual([[1, 2, 3]]);
  });
});