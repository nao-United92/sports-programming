import { union } from './union-utils.js';

describe('union', () => {
  test('should return the union of two arrays', () => {
    expect(union([2], [1, 2])).toEqual([2, 1]);
  });

  test('should return the union of multiple arrays', () => {
    expect(union([1, 2, 3], [101, 2, 1, 10], [2, 1])).toEqual([1, 2, 3, 101, 10]);
  });

  test('should handle empty arrays', () => {
    expect(union([], [1, 2])).toEqual([1, 2]);
    expect(union([1, 2], [])).toEqual([1, 2]);
    expect(union([], [])).toEqual([]);
  });

  test('should handle arrays with no common elements', () => {
    expect(union([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle non-array inputs', () => {
    expect(union([1, 2], null, undefined, 'string')).toEqual([1, 2]);
  });
});