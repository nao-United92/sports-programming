const arrayUnion = require('./array-union-utils');

describe('arrayUnion', () => {
  test('should return unique elements from two number arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    expect(arrayUnion(arr1, arr2)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return unique elements from two string arrays', () => {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['c', 'd', 'e'];
    expect(arrayUnion(arr1, arr2)).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  test('should handle arrays with no common elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(arrayUnion(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should handle empty arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    expect(arrayUnion(arr1, arr2)).toEqual([1, 2, 3]);
    expect(arrayUnion([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(arrayUnion([], [])).toEqual([]);
  });

  test('should handle duplicate elements within input arrays', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [3, 3, 4, 5];
    expect(arrayUnion(arr1, arr2)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle mixed types if Set can compare them', () => {
    const arr1 = [1, 'a', null];
    const arr2 = ['a', undefined, 2];
    expect(arrayUnion(arr1, arr2)).toEqual([1, 'a', null, undefined, 2]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayUnion(null, [1, 2])).toThrow('Expected both arguments to be arrays.');
    expect(() => arrayUnion(123, [1, 2])).toThrow('Expected both arguments to be arrays.');
  });

  test('should throw an error if the second argument is not an array', () => {
    expect(() => arrayUnion([1, 2], null)).toThrow('Expected both arguments to be arrays.');
    expect(() => arrayUnion([1, 2], 'string')).toThrow('Expected both arguments to be arrays.');
  });
});
