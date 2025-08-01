
import { intersection } from './intersection-utils.js';

describe('intersection', () => {
  test('should return the intersection of two arrays', () => {
    const result = intersection([2, 1], [2, 3]);
    expect(result).toEqual([2]);
  });

  test('should return the intersection of multiple arrays', () => {
    const result = intersection(['a', 'b'], ['b', 'c'], ['b', 'd']);
    expect(result).toEqual(['b']);
  });

  test('should return an empty array if no common values are found', () => {
    const result = intersection([1, 2], [3, 4], [5, 6]);
    expect(result).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(intersection([], [1, 2])).toEqual([]);
    expect(intersection([1, 2], [])).toEqual([]);
  });

  test('should handle non-array inputs gracefully', () => {
    expect(intersection([1, 2], null)).toEqual([]);
    expect(intersection(undefined, [1, 2])).toEqual([]);
    expect(intersection([1, 2], 123)).toEqual([]);
  });

  test('should work with different data types', () => {
    const obj = { a: 1 };
    const arr = [1, 'a', obj];
    const result = intersection(arr, [obj, 'a']);
    expect(result).toEqual(['a', obj]);
  });

  test('should return an empty array if called with no arguments', () => {
    expect(intersection()).toEqual([]);
  });

  test('should return a copy of the first array if only one is provided', () => {
      const arr = [1, 2, 3];
      const result = intersection(arr);
      expect(result).toEqual(arr);
      expect(result).not.toBe(arr);
  });
});
