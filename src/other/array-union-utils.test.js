import { union } from './array-union-utils.js';

describe('union', () => {
  test('should return the union of two arrays', () => {
    const result = union([2], [1, 2]);
    expect(result).toEqual([2, 1]);
  });

  test('should handle multiple arrays', () => {
    const result = union([1, 2], [2, 3], [3, 4]);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('should remove duplicate values', () => {
    const result = union([1, 1, 2, 2], [2, 3, 3, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should handle arrays with different data types', () => {
    const result = union([1, 'a', null], ['a', false, null]);
    expect(result).toEqual([1, 'a', null, false]);
  });

  test('should handle empty arrays', () => {
    const result = union([], [1, 2], []);
    expect(result).toEqual([1, 2]);
  });

  test('should return an empty array if all input arrays are empty', () => {
    const result = union([], []);
    expect(result).toEqual([]);
  });

  test('should handle a single array', () => {
    const result = union([1, 2, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });
});
