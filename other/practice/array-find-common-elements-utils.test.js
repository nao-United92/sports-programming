const arrayFindCommonElements = require('./array-find-common-elements-utils');

describe('arrayFindCommonElements', () => {
  test('should find common elements among three arrays of numbers', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    const arr3 = [4, 6, 7, 8];
    expect(arrayFindCommonElements(arr1, arr2, arr3)).toEqual([4]);
  });

  test('should find common elements among two arrays of strings', () => {
    const arr1 = ['apple', 'banana', 'orange'];
    const arr2 = ['banana', 'grape', 'apple'];
    expect(arrayFindCommonElements(arr1, arr2)).toEqual(['apple', 'banana']);
  });

  test('should handle cases with no common elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [7, 8, 9];
    expect(arrayFindCommonElements(arr1, arr2, arr3)).toEqual([]);
  });

  test('should handle empty input arrays gracefully', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    const arr3 = [1, 2];
    expect(arrayFindCommonElements(arr1, arr2, arr3)).toEqual([]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(arrayFindCommonElements()).toEqual([]);
  });

  test('should return unique common elements when duplicates exist', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 3, 3, 4];
    const arr3 = [2, 4, 5];
    expect(arrayFindCommonElements(arr1, arr2, arr3)).toEqual([2]);
  });

  test('should throw an error if any argument is not an array', () => {
    expect(() => arrayFindCommonElements([1, 2], null, [3, 4])).toThrow('Expected all arguments to be arrays.');
    expect(() => arrayFindCommonElements([1, 2], 'string')).toThrow('Expected all arguments to be arrays.');
  });
});
