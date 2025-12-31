import { mergeSortedArrays } from './array-merge-sorted-utils.js';

describe('mergeSortedArrays', () => {
  it('should merge two sorted arrays into a single sorted array', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle arrays with different lengths', () => {
    const arr1 = [1, 5];
    const arr2 = [2, 3, 4, 6];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle one empty array', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([1, 2, 3]);
    expect(mergeSortedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle both empty arrays', () => {
    expect(mergeSortedArrays([], [])).toEqual([]);
  });

  it('should handle arrays with duplicate values', () => {
    const arr1 = [1, 2, 2, 4];
    const arr2 = [2, 3, 3, 5];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([1, 2, 2, 2, 3, 3, 4, 5]);
  });

  it('should not mutate the original arrays', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const originalArr1 = [...arr1];
    const originalArr2 = [...arr2];
    mergeSortedArrays(arr1, arr2);
    expect(arr1).toEqual(originalArr1);
    expect(arr2).toEqual(originalArr2);
  });
});