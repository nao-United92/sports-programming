const arrayIntersectionElements = require('./array-intersection-elements');

describe('arrayIntersectionElements', () => {
  test('should return an empty array if no arrays are provided', () => {
    expect(arrayIntersectionElements()).toEqual([]);
  });

  test('should return an empty array if one of the input arrays is empty', () => {
    expect(arrayIntersectionElements([1, 2, 3], [])).toEqual([]);
    expect(arrayIntersectionElements([], [1, 2, 3])).toEqual([]);
  });

  test('should find common elements between two arrays of numbers', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    expect(arrayIntersectionElements(arr1, arr2)).toEqual([3, 4]);
  });

  test('should find common elements among multiple arrays of numbers', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];
    const arr3 = [4, 5, 8, 9, 10];
    expect(arrayIntersectionElements(arr1, arr2, arr3)).toEqual([4, 5]);
  });

  test('should handle arrays with duplicate elements, returning unique common elements', () => {
    const arr1 = [1, 2, 2, 3, 4];
    const arr2 = [2, 3, 3, 4, 5];
    expect(arrayIntersectionElements(arr1, arr2)).toEqual([2, 3, 4]);
  });

  test('should handle arrays with mixed data types', () => {
    const arr1 = [1, 'a', null, {
      id: 1
    }, undefined];
    const arr2 = ['a', 2, null, {
      id: 1
    }];
    // Note: Object comparison by reference, not value, for Set
    const common = arrayIntersectionElements(arr1, arr2);
    expect(common).toEqual(['a', null]);
    // This test case would fail for `{id:1}` because Set uses strict equality (===)
    // For deep object comparison, custom logic would be needed within the utility.
    // For now, assuming standard Set behavior.
  });

  test('should return an empty array if no common elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(arrayIntersectionElements(arr1, arr2)).toEqual([]);
  });

  test('should throw TypeError if any argument is not an array', () => {
    expect(() => arrayIntersectionElements([1, 2], null)).toThrow(TypeError);
    expect(() => arrayIntersectionElements(undefined, [1, 2])).toThrow(TypeError);
    expect(() => arrayIntersectionElements([1, 2], 'string')).toThrow(TypeError);
    expect(() => arrayIntersectionElements(123, [1, 2])).toThrow(TypeError);
  });
});
