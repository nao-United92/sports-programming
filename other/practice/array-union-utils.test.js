const union = require('./array-union-utils');

describe('union', () => {
  test('should return the union of two arrays of numbers', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    expect(union(arr1, arr2)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle duplicate values within the same array', () => {
    const arr1 = [1, 1, 2];
    const arr2 = [2, 3, 3];
    expect(union(arr1, arr2)).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    expect(union([], [1, 2])).toEqual([1, 2]);
    expect(union([1, 2], [])).toEqual([1, 2]);
    expect(union([], [])).toEqual([]);
  });

  test('should handle arrays with mixed types', () => {
    const arr1 = [1, 'a', null];
    const arr2 = ['a', undefined, 2];
    expect(union(arr1, arr2)).toEqual([1, 'a', null, undefined, 2]);
  });

  test('should throw an error if the first input is not an array', () => {
    expect(() => union(null, [1, 2])).toThrow('Expected both inputs to be arrays');
    expect(() => union(123, [1, 2])).toThrow('Expected both inputs to be arrays');
  });

  test('should throw an error if the second input is not an array', () => {
    expect(() => union([1, 2], null)).toThrow('Expected both inputs to be arrays');
    expect(() => union([1, 2], 'string')).toThrow('Expected both inputs to be arrays');
  });
});