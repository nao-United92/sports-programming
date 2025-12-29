import { xor } from './array-xor-utils';

describe('xor', () => {
  test('should return unique values that are the symmetric difference of the given arrays', () => {
    expect(xor([2, 1], [2, 3])).toEqual([1, 3]);
  });

  test('should handle multiple arrays', () => {
    expect(xor([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([1, 5]);
  });

  test('should handle empty arrays', () => {
    expect(xor([], [1, 2])).toEqual([1, 2]);
    expect(xor([1, 2], [])).toEqual([1, 2]);
    expect(xor([], [])).toEqual([]);
  });

  test('should handle arrays with no common elements', () => {
    expect(xor([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle arrays with all common elements', () => {
    expect(xor([1, 2], [1, 2])).toEqual([]);
  });

  test('should handle different data types', () => {
    expect(xor([1, 'a', 2], [2, 'a', 3])).toEqual([1, 3]);
  });

  test('should maintain order of appearance in the result', () => {
    expect(xor([1, 2, 3], [4, 2, 5], [1, 6])).toEqual([3, 4, 5, 6]);
  });
});