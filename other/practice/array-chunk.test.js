const { chunk } = require('./array-chunk');

describe('chunk', () => {
  it('should split an array into chunks of a specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should handle a perfect split', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  it('should return the original array in a single chunk if size is greater than array length', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  it('should handle an empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it('should handle size of 1', () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
    expect(chunk('string', 2)).toEqual([]); // 'string' has a length, but is not an array for chunking
  });

  it('should return an empty array if size is 0 or negative', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });
});
