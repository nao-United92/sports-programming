
import { union } from './union-utils.js';

describe('union', () => {
  test('should return the union of two arrays', () => {
    expect(union([2], [1, 2])).toEqual([2, 1]);
  });

  test('should return the union of multiple arrays', () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should maintain the order of elements', () => {
    expect(union([3, 2, 1], [4, 2])).toEqual([3, 2, 1, 4]);
  });

  test('should handle empty arrays', () => {
    expect(union([], [1, 2])).toEqual([1, 2]);
    expect(union([1, 2], [])).toEqual([1, 2]);
  });

  test('should handle non-array inputs gracefully', () => {
    expect(union([1, 2], null, [3, 4], undefined)).toEqual([1, 2, 3, 4]);
  });

  test('should work with different data types', () => {
    const obj = { a: 1 };
    const result = union([1, 'a', obj], ['b', obj, 2]);
    expect(result).toEqual([1, 'a', obj, 'b', 2]);
  });

  test('should return an empty array if called with no arguments', () => {
    expect(union()).toEqual([]);
  });

  test('should return a unique set from a single array', () => {
    expect(union([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });
});
