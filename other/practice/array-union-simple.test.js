import { union } from './array-union-simple';

describe('union', () => {
  test('should return unique values from two arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const result = union(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('should return unique values from multiple arrays', () => {
    const result = union([1], [1, 2], [2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });
});
