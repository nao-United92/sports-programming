import { chunk } from './array-chunk-utils.js';

describe('chunk', () => {
  test('should chunk an array into smaller arrays', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(chunk(arr, 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('should handle an empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('should handle a size larger than the array length', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, 5)).toEqual([[1, 2, 3]]);
  });

  test('should handle a size of 1', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, 1)).toEqual([[1], [2], [3]]);
  });

  test('should return an empty array for invalid size', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, 0)).toEqual([]);
    expect(chunk(arr, -1)).toEqual([]);
  });

  test('should handle non-array input', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
    expect(chunk(123, 2)).toEqual([]);
  });
});
