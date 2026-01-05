const arrayUnion = require('./array-union-utils');

describe('arrayUnion', () => {
  test('should return unique values from multiple arrays', () => {
    const arr1 = [2, 1];
    const arr2 = [2, 3];
    expect(arrayUnion(arr1, arr2)).toEqual([2, 1, 3]);
  });

  test('should handle arrays with duplicate values internally', () => {
    const arr1 = [1, 1, 2, 3];
    const arr2 = [3, 4, 4, 5];
    expect(arrayUnion(arr1, arr2)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should maintain the order of first appearance', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 2, 5];
    const arr3 = [6, 1];
    expect(arrayUnion(arr1, arr2, arr3)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should handle empty arrays', () => {
    const arr1 = [];
    const arr2 = [1, 2];
    const arr3 = [];
    expect(arrayUnion(arr1, arr2, arr3)).toEqual([1, 2]);
  });

  test('should handle a single array input', () => {
    const arr = [1, 2, 2, 3];
    expect(arrayUnion(arr)).toEqual([1, 2, 3]);
  });

  test('should handle mixed types of values', () => {
    const arr1 = [1, 'a', null];
    const arr2 = ['a', 2, undefined];
    expect(arrayUnion(arr1, arr2)).toEqual([1, 'a', null, 2, undefined]);
  });

  test('should throw TypeError if any argument is not an array', () => {
    expect(() => arrayUnion([1, 2], null)).toThrow(TypeError);
    expect(() => arrayUnion([1, 2], 'string')).toThrow(TypeError);
    expect(() => arrayUnion(123, [1, 2])).toThrow(TypeError);
  });
});
