import { getUnionOfValues } from './array-union-of-values.js';

describe('getUnionOfValues', () => {
  test('should return the union of two arrays of numbers', () => {
    expect(getUnionOfValues([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return the union of two arrays of strings', () => {
    expect(getUnionOfValues(['a', 'b'], ['b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test('should handle an empty array as the first argument', () => {
    expect(getUnionOfValues([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle an empty array as the second argument', () => {
    expect(getUnionOfValues([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test('should handle two empty arrays', () => {
    expect(getUnionOfValues([], [])).toEqual([]);
  });

  test('should handle arrays with duplicate values', () => {
    expect(getUnionOfValues([1, 1, 2], [2, 3, 3])).toEqual([1, 2, 3]);
  });

  test('should return unique values from a single array if the other is not an array', () => {
    expect(getUnionOfValues([1, 2, 2], 'not an array')).toEqual([1, 2]);
    expect(getUnionOfValues(null, [1, 2, 2])).toEqual([1, 2]);
  });

  test('should return an empty array if both inputs are not arrays', () => {
    expect(getUnionOfValues('a', 'b')).toEqual([]);
    expect(getUnionOfValues(null, undefined)).toEqual([]);
  });
});
