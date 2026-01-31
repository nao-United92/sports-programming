const chunk = require('./array-chunk-simple');

describe('chunk', () => {
  test('should divide an array into chunks of the specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('should handle a chunk size larger than the array length', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  test('should return an empty array for invalid inputs', () => {
    expect(chunk([], 2)).toEqual([]);
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
    expect(chunk(null, 2)).toEqual([]);
  });

  test('should handle a chunk size of 1', () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });
});
