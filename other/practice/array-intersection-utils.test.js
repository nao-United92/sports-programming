const intersection = require('./array-intersection-utils');

describe('intersection', () => {
  test('should return the intersection of two arrays of numbers', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    expect(intersection(arr1, arr2)).toEqual([3]);
  });

  test('should handle duplicate values within the same array and return unique intersection', () => {
    const arr1 = [1, 1, 2, 3];
    const arr2 = [2, 3, 3, 4];
    expect(intersection(arr1, arr2)).toEqual([2, 3]);
  });

  test('should return an empty array if no common elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(intersection(arr1, arr2)).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(intersection([], [1, 2])).toEqual([]);
    expect(intersection([1, 2], [])).toEqual([]);
    expect(intersection([], [])).toEqual([]);
  });

  test('should handle arrays with mixed types', () => {
    const arr1 = [1, 'a', null, 5];
    const arr2 = ['a', undefined, null, 2];
    expect(intersection(arr1, arr2)).toEqual(['a', null]);
  });

  test('should throw an error if the first input is not an array', () => {
    expect(() => intersection(null, [1, 2])).toThrow('Expected both inputs to be arrays');
    expect(() => intersection(123, [1, 2])).toThrow('Expected both inputs to be arrays');
  });

  test('should throw an error if the second input is not an array', () => {
    expect(() => intersection([1, 2], null)).toThrow('Expected both inputs to be arrays');
    expect(() => intersection([1, 2], 'string')).toThrow('Expected both inputs to be arrays');
  });
});