import { difference } from './array-difference';

describe('difference', () => {
  test('should return elements in arr1 but not in arr2', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    expect(difference(arr1, arr2)).toEqual([1, 2]);
  });

  test('should handle arrays with no common elements', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    expect(difference(arr1, arr2)).toEqual([1, 2]);
  });

  test('should return an empty array if arr1 is empty', () => {
    const arr1 = [];
    const arr2 = [1, 2];
    expect(difference(arr1, arr2)).toEqual([]);
  });

  test('should return unique elements of arr1 if arr2 is empty', () => {
    const arr1 = [1, 2, 2];
    const arr2 = [];
    expect(difference(arr1, arr2)).toEqual([1, 2]);
  });

  test('should handle arrays with mixed types', () => {
    const arr1 = [1, 'a', true, 'b'];
    const arr2 = ['a', false, 1];
    expect(difference(arr1, arr2)).toEqual([true, 'b']);
  });

  test('should handle duplicate values in arr1', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 4];
    expect(difference(arr1, arr2)).toEqual([1, 3]);
  });

  test('should handle objects by reference', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    const arr1 = [obj1, obj2];
    const arr2 = [obj2, obj3];
    expect(difference(arr1, arr2)).toEqual([obj1]);
  });

  test('should handle non-array for arr1', () => {
    expect(difference(null, [1, 2])).toEqual([]);
  });

  test('should handle non-array for arr2', () => {
    expect(difference([1, 2, 3], null)).toEqual([1, 2, 3]);
  });
});
