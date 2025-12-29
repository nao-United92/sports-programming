import { union } from './array-union-utils';

describe('union', () => {
  test('should return a new array of unique values, in order, from all given arrays', () => {
    expect(union([2, 1], [2, 3])).toEqual([2, 1, 3]);
  });

  test('should handle empty arrays', () => {
    expect(union([], [1, 2])).toEqual([1, 2]);
    expect(union([1, 2], [])).toEqual([1, 2]);
    expect(union([], [])).toEqual([]);
  });

  test('should handle multiple arrays', () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should maintain the order of appearance', () => {
    expect(union([1, 5, 2], [2, 3, 5])).toEqual([1, 5, 2, 3]);
  });

  test('should handle arrays with different data types', () => {
    expect(union([1, 'a'], [2, 'a', 1])).toEqual([1, 'a', 2]);
  });
});