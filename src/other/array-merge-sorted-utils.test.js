const { mergeSortedArrays } = require('./array-merge-sorted-utils.js');

describe('mergeSortedArrays', () => {
  test('should merge two sorted arrays correctly', () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4, 6, 8];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('should handle arrays of different lengths', () => {
    const arr1 = [1, 5, 10];
    const arr2 = [2, 3, 8, 11, 12];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([1, 2, 3, 5, 8, 10, 11, 12]);
  });

  test('should handle an empty array as input', () => {
    const arr1 = [];
    const arr2 = [2, 4, 6];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([2, 4, 6]);
    expect(mergeSortedArrays(arr2, arr1)).toEqual([2, 4, 6]);
  });

  test('should handle two empty arrays', () => {
    const arr1 = [];
    const arr2 = [];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([]);
  });

  test('should handle arrays with negative numbers', () => {
    const arr1 = [-3, -1, 0];
    const arr2 = [-4, -2, 5];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([-4, -3, -2, -1, 0, 5]);
  });

  test('should handle arrays with duplicate numbers', () => {
    const arr1 = [1, 2, 2, 6];
    const arr2 = [2, 3, 5];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([1, 2, 2, 2, 3, 5, 6]);
  });
});
