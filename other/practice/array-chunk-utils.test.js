import chunk from './array-chunk-utils';

describe('chunk', () => {
  test('should chunk an array into smaller arrays', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('should return an empty array if given an empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('should return the original array if chunk size is greater than array length', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  test('should handle chunk size of 1', () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  test('should handle zero or negative chunk size by returning empty array', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });
});
