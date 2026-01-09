import { union } from './array-union-utils.js';

describe('union', () => {
  test('should return the union of multiple arrays', () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle a single array', () => {
    expect(union([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    expect(union([], [1, 2], [])).toEqual([1, 2]);
  });

  test('should handle arrays with different data types', () => {
    expect(union([1, 'a'], [null, 'a'])).toEqual([1, 'a', null]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(union()).toEqual([]);
  });
});