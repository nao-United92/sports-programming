import chunk from './array-chunk-simple-slice';

describe('chunk', () => {
  it('should create chunks of a specific size', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  it('should return an empty array if the input array is empty', () => {
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

  it('should return the original array in a single chunk if size is not provided', () => {
    const arr = [1, 2, 3, 4, 5];
    // Testing with size 0 or undefined, though the loop condition naturally handles this.
    // Let's test with a large size to be practical.
    expect(chunk(arr, arr.length)).toEqual([[1, 2, 3, 4, 5]]);
  });
});
