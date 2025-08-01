
import { difference } from './difference-utils.js';

describe('difference', () => {
  test('should return the difference between two arrays', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });

  test('should handle multiple arrays for exclusion', () => {
    expect(difference([1, 2, 3, 4, 5], [5, 2], [1, 4])).toEqual([3]);
  });

  test('should return the original array if no values to exclude are provided', () => {
    expect(difference([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should return an empty array if the first array is empty', () => {
    expect(difference([], [1, 2])).toEqual([]);
  });

  test('should handle non-array input gracefully', () => {
    expect(difference(null, [1, 2])).toEqual([]);
    expect(difference(undefined, [1, 2])).toEqual([]);
  });

  test('should work with different data types', () => {
    const obj = { a: 1 };
    expect(difference([1, 'a', obj], [1, obj])).toEqual(['a']);
  });

  test('should return the original array if the exclusion arrays are empty', () => {
    expect(difference([1, 2, 3], [], [])).toEqual([1, 2, 3]);
  });
});
