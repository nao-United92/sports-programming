import { intersection } from './array-intersection';

describe('intersection', () => {
  test('should return common elements from two arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    expect(intersection(arr1, arr2)).toEqual([3]);
  });

  test('should return common elements from multiple arrays', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [2, 3, 5];
    const arr3 = [3, 4, 6];
    expect(intersection(arr1, arr2, arr3)).toEqual([3]);
  });

  test('should handle no common elements', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    expect(intersection(arr1, arr2)).toEqual([]);
  });

  test('should return an empty array if any input is empty', () => {
    const arr1 = [1, 2];
    const arr2 = [];
    expect(intersection(arr1, arr2)).toEqual([]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(intersection()).toEqual([]);
  });

  test('should handle arrays with mixed types', () => {
    const arr1 = [1, 'a', true];
    const arr2 = ['a', false, 1];
    expect(intersection(arr1, arr2)).toEqual([1, 'a']); // Order is based on first array
  });

  test('should handle arrays with duplicate values in input arrays', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 3, 3, 4];
    expect(intersection(arr1, arr2)).toEqual([2, 3]); // Duplicates in the first array are preserved if present in others
  });

  test('should handle objects by reference', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    const arr1 = [obj1, obj2];
    const arr2 = [obj2, obj3];
    expect(intersection(arr1, arr2)).toEqual([obj2]);
  });
});
