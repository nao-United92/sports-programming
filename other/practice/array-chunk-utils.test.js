import { chunk } from './array-chunk-utils';

describe('chunk', () => {
  test('should split an array into chunks of a specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5]
    ]);
  });

  test('should handle a size that divides the array evenly', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6]
    ]);
  });

  test('should handle a size larger than the array length', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([
      [1, 2, 3]
    ]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(chunk([], 3)).toEqual([]);
  });

  test('should return an empty array for a size of 0', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
  });

  test('should return an empty array for a negative size', () => {
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });

  test('should handle array with single element and size 1', () => {
    expect(chunk([1], 1)).toEqual([
      [1]
    ]);
  });

  test('should handle array with single element and size greater than 1', () => {
    expect(chunk([1], 5)).toEqual([
      [1]
    ]);
  });
});