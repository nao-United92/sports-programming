import { sortedUniq } from './array-sortedUniq-utils';

describe('sortedUniq', () => {
  test('should return a duplicate-free version of a sorted array', () => {
    expect(sortedUniq([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });

  test('should handle already unique sorted array', () => {
    expect(sortedUniq([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle empty array', () => {
    expect(sortedUniq([])).toEqual([]);
  });

  test('should handle array with single element', () => {
    expect(sortedUniq([1])).toEqual([1]);
  });

  test('should handle array with all duplicate elements', () => {
    expect(sortedUniq([5, 5, 5, 5])).toEqual([5]);
  });

  test('should handle mixed data types in a sorted array', () => {
    expect(sortedUniq([1, 1, 'a', 'a', 'b', 'b', 2, 2])).toEqual([1, 'a', 'b', 2]);
  });

  test('should not modify the original array', () => {
    const originalArray = [1, 1, 2, 3, 3];
    sortedUniq(originalArray);
    expect(originalArray).toEqual([1, 1, 2, 3, 3]);
  });
});
