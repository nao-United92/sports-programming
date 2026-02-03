import { chunk } from './array-chunk-advanced-utils.js';

describe('chunk', () => {
  it('should create chunks of a specific size', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(chunk([], 3)).toEqual([]);
  });

  it('should handle a chunk size larger than the array length', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, 5)).toEqual([[1, 2, 3]]);
  });

  it('should handle a chunk size of 1', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, 1)).toEqual([[1], [2], [3]]);
  });
});
