const arrayIntersection = require('./array-intersection-utils');

describe('arrayIntersection', () => {
  test('should return common elements from two number arrays', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    expect(arrayIntersection(arr1, arr2)).toEqual([3, 4]);
  });

  test('should return common elements from two string arrays', () => {
    const arr1 = ['apple', 'banana', 'orange'];
    const arr2 = ['banana', 'grape', 'apple'];
    expect(arrayIntersection(arr1, arr2)).toEqual(['banana', 'apple']);
  });

  test('should handle arrays with no common elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(arrayIntersection(arr1, arr2)).toEqual([]);
  });

  test('should handle empty arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    expect(arrayIntersection(arr1, arr2)).toEqual([]);
    expect(arrayIntersection([], [1, 2, 3])).toEqual([]);
    expect(arrayIntersection([], [])).toEqual([]);
  });

  test('should handle duplicate elements in input arrays correctly', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 3, 3, 4];
    expect(arrayIntersection(arr1, arr2)).toEqual([2, 3]);
  });

  test('should handle mixed types if Set can compare them', () => {
    const arr1 = [1, 'a', null, undefined, {a: 1}];
    const arr2 = ['a', null, {a: 1}, 2];
    // Note: Objects are compared by reference in Set, so {a: 1} will not be considered equal unless it's the exact same object.
    expect(arrayIntersection(arr1, arr2)).toEqual(['a', null]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayIntersection(null, [1, 2])).toThrow('Expected both arguments to be arrays.');
    expect(() => arrayIntersection(123, [1, 2])).toThrow('Expected both arguments to be arrays.');
  });

  test('should throw an error if the second argument is not an array', () => {
    expect(() => arrayIntersection([1, 2], null)).toThrow('Expected both arguments to be arrays.');
    expect(() => arrayIntersection([1, 2], 'string')).toThrow('Expected both arguments to be arrays.');
  });
});