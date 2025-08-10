import { union } from './union-utils';

describe('union', () => {
  test('should return the union of two arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    expect(union(arr1, arr2)).toEqual([1, 2, 3, 4]);
  });

  test('should return the union of multiple arrays', () => {
    const arr1 = [1, 2];
    const arr2 = [2, 3];
    const arr3 = [3, 4];
    expect(union(arr1, arr2, arr3)).toEqual([1, 2, 3, 4]);
  });

  test('should handle arrays with different data types', () => {
    const arr1 = [1, 'a', null];
    const arr2 = ['a', false, null];
    expect(union(arr1, arr2)).toEqual([1, 'a', null, false]);
  });

  test('should return a new array', () => {
    const arr1 = [1, 2];
    const result = union(arr1);
    expect(result).not.toBe(arr1);
    expect(result).toEqual(arr1);
  });

  test('should work with a single array', () => {
    expect(union([1, 2, 1])).toEqual([1, 2]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(union()).toEqual([]);
  });

  test('should handle empty arrays as input', () => {
    expect(union([1, 2], [], [3])).toEqual([1, 2, 3]);
  });
});
