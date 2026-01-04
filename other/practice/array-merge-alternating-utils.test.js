import { mergeAlternating } from './array-merge-alternating-utils';

describe('mergeAlternating', () => {
  test('should merge two arrays of equal length by alternating elements', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    expect(mergeAlternating(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should merge when the first array is longer', () => {
    const arr1 = [1, 3, 5, 7, 9];
    const arr2 = [2, 4, 6];
    expect(mergeAlternating(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);
  });

  test('should merge when the second array is longer', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6, 8, 10];
    expect(mergeAlternating(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 8, 10]);
  });

  test('should handle one empty array (first is empty)', () => {
    const arr1 = [];
    const arr2 = [2, 4, 6];
    expect(mergeAlternating(arr1, arr2)).toEqual([2, 4, 6]);
  });

  test('should handle one empty array (second is empty)', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [];
    expect(mergeAlternating(arr1, arr2)).toEqual([1, 3, 5]);
  });

  test('should handle both empty arrays', () => {
    expect(mergeAlternating([], [])).toEqual([]);
  });

  test('should not modify original arrays', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const originalArr1 = [...arr1];
    const originalArr2 = [...arr2];
    mergeAlternating(arr1, arr2);
    expect(arr1).toEqual(originalArr1);
    expect(arr2).toEqual(originalArr2);
  });

  test('should throw an error if arr1 is not an array', () => {
    expect(() => mergeAlternating(null, [])).toThrow('Expected both arguments to be arrays');
    expect(() => mergeAlternating(123, [])).toThrow('Expected both arguments to be arrays');
  });

  test('should throw an error if arr2 is not an array', () => {
    expect(() => mergeAlternating([], null)).toThrow('Expected both arguments to be arrays');
    expect(() => mergeAlternating([], "string")).toThrow('Expected both arguments to be arrays');
  });
});
