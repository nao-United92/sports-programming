import { union } from './array-union-utils.js';

describe('union', () => {
  test('should return the union of two arrays', () => {
    expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should return the union of multiple arrays', () => {
    expect(union([1, 2], [3, 4], [5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should remove duplicate values', () => {
    expect(union([1, 1, 2], [2, 3, 3])).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    expect(union([], [1, 2])).toEqual([1, 2]);
  });
});