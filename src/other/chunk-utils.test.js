import { chunk } from './chunk-utils.js';

describe('chunk', () => {
  test('should split an array into chunks of a specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('should handle an empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('should handle a chunk size larger than the array length', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  test('should handle a chunk size of 1', () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  test('should return an empty array for invalid input', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
    expect(chunk('string', 2)).toEqual([]);
    expect(chunk([1, 2], 0)).toEqual([]);
    expect(chunk([1, 2], -1)).toEqual([]);
  });
});
