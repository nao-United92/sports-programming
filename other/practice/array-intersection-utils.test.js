import { intersection } from './array-intersection-utils';

describe('intersection', () => {
  test('should return unique values that are included in all given arrays', () => {
    expect(intersection([2, 1], [2, 3])).toEqual([2]);
  });

  test('should handle multiple arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([3]);
  });

  test('should handle empty arrays', () => {
    expect(intersection([], [1, 2, 3])).toEqual([]);
    expect(intersection([1, 2, 3], [])).toEqual([]);
    expect(intersection([], [])).toEqual([]);
  });

  test('should handle arrays with no common elements', () => {
    expect(intersection([1, 2], [3, 4])).toEqual([]);
  });

  test('should handle arrays with all common elements', () => {
    expect(intersection([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should maintain order of appearance based on the first array', () => {
    expect(intersection([1, 5, 2, 3], [2, 3, 5])).toEqual([5, 2, 3]);
  });

  test('should handle different data types', () => {
    expect(intersection([1, 'a', 2], [2, 'a', 3])).toEqual(['a', 2]);
  });

  test('should return empty array if no arrays are provided', () => {
    expect(intersection()).toEqual([]);
  });
});