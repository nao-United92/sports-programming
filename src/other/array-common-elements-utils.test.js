import { commonElements } from './array-common-elements-utils.js';

describe('commonElements', () => {
  test('should return common elements from multiple arrays', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    const arr3 = [4, 6, 7, 8];
    expect(commonElements(arr1, arr2, arr3)).toEqual([4]);
  });

  test('should handle no common elements', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    expect(commonElements(arr1, arr2)).toEqual([]);
  });

  test('should handle empty arrays', () => {
    const arr1 = [1, 2];
    const arr2 = [];
    expect(commonElements(arr1, arr2)).toEqual([]);
  });

  test('should handle single array input', () => {
    const arr1 = [1, 2, 2, 3];
    expect(commonElements(arr1)).toEqual([1, 2, 3]); // Should return unique elements
  });

  test('should handle no array input', () => {
    expect(commonElements()).toEqual([]);
  });

  test('should maintain order based on the first array', () => {
    const arr1 = [5, 1, 3, 2, 4];
    const arr2 = [3, 1, 5];
    expect(commonElements(arr1, arr2)).toEqual([5, 1, 3]);
  });

  test('should handle different data types', () => {
    const arr1 = [1, 'a', null, { id: 1 }];
    const arr2 = ['a', null, { id: 1 }, 2];
    // Note: Object comparison by reference, so {id:1} will not be common unless it's the exact same object reference
    expect(commonElements(arr1, arr2)).toEqual(['a', null]);
  });
});
