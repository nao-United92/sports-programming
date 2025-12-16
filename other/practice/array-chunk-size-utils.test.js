const chunkSize = require('./array-chunk-size-utils');

describe('chunkSize', () => {
  it('should split an array into chunks of a specified size', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const size = 3;
    const expected = [[1, 2, 3], [4, 5, 6], [7]];
    expect(chunkSize(arr, size)).toEqual(expected);
  });

  it('should handle an array that divides evenly by the chunk size', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const size = 2;
    const expected = [[1, 2], [3, 4], [5, 6]];
    expect(chunkSize(arr, size)).toEqual(expected);
  });

  it('should return the original array in a single chunk if size is larger than array length', () => {
    const arr = [1, 2, 3];
    const size = 5;
    const expected = [[1, 2, 3]];
    expect(chunkSize(arr, size)).toEqual(expected);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(chunkSize([], 3)).toEqual([]);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(chunkSize(null, 3)).toEqual([]);
    expect(chunkSize(undefined, 3)).toEqual([]);
    expect(chunkSize({}, 3)).toEqual([]);
  });

  it('should return an empty array if size is not a positive integer', () => {
    const arr = [1, 2, 3];
    expect(chunkSize(arr, 0)).toEqual([]);
    expect(chunkSize(arr, -1)).toEqual([]);
    expect(chunkSize(arr, 2.5)).toEqual([]);
    expect(chunkSize(arr, 'abc')).toEqual([]);
    expect(chunkSize(arr, null)).toEqual([]);
  });
});
