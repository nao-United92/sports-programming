const { chunkFromRight } = require('./array-chunk-from-right-utils');

describe('chunkFromRight', () => {
  test('should create chunks of a specified size from the right', () => {
    expect(chunkFromRight([1, 2, 3, 4, 5], 2)).toEqual([[1], [2, 3], [4, 5]]);
  });

  test('should handle arrays that split evenly', () => {
    expect(chunkFromRight([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  test('should return an array of single-element arrays if size is 1', () => {
    expect(chunkFromRight([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  test('should return a single chunk if size is larger than array length', () => {
    expect(chunkFromRight([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(chunkFromRight([], 3)).toEqual([]);
  });

  test('should handle non-array input gracefully', () => {
    expect(chunkFromRight(null, 2)).toEqual([]);
    expect(chunkFromRight(undefined, 2)).toEqual([]);
  });

  test('should handle invalid size gracefully', () => {
    expect(chunkFromRight([1, 2, 3], 0)).toEqual([]);
    expect(chunkFromRight([1, 2, 3], -1)).toEqual([]);
  });
});
