import { difference } from './array-difference-utils';

describe('difference', () => {
  test('should return a new array of values not included in the other given arrays', () => {
    expect(difference([1, 2, 3, 4, 5], [5, 2, 10])).toEqual([1, 3, 4]);
  });

  test('should handle multiple arrays to compare against', () => {
    expect(difference([1, 2, 3, 4, 5], [5, 2], [10, 3])).toEqual([1, 4]);
  });

  test('should handle empty arrays', () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(difference([], [1, 2, 3])).toEqual([]);
    expect(difference([], [])).toEqual([]);
  });

  test('should handle arrays with no common elements', () => {
    expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
  });

  test('should handle arrays with all common elements', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  test('should maintain the order of original array', () => {
    expect(difference([5, 1, 3, 2, 4], [2, 5])).toEqual([1, 3, 4]);
  });

  test('should handle different data types', () => {
    expect(difference([1, 'a', 2, 'b'], [2, 'a'])).toEqual([1, 'b']);
  });
});
