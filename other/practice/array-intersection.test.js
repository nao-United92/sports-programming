import arrayIntersection from './array-intersection';

describe('arrayIntersection', () => {
  test('should return common elements from two arrays of numbers', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];
    expect(arrayIntersection(arr1, arr2)).toEqual([3, 4, 5]);
  });

  test('should return common elements from two arrays with duplicates', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 3, 3, 4];
    expect(arrayIntersection(arr1, arr2)).toEqual([2, 3]);
  });

  test('should return an empty array if no common elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(arrayIntersection(arr1, arr2)).toEqual([]);
  });

  test('should return an empty array if one array is empty', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    expect(arrayIntersection(arr1, arr2)).toEqual([]);
    expect(arrayIntersection([], arr1)).toEqual([]);
  });

  test('should return an empty array if both arrays are empty', () => {
    expect(arrayIntersection([], [])).toEqual([]);
  });

  test('should handle different data types', () => {
    const arr1 = [1, 'a', true, null];
    const arr2 = ['a', false, null, 2];
    expect(arrayIntersection(arr1, arr2)).toEqual(['a', null]);
  });
});
