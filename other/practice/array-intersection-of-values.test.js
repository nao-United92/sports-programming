import { getIntersectionOfValues } from './array-intersection-of-values.js';

describe('getIntersectionOfValues', () => {
  test('should return the intersection of two arrays of numbers', () => {
    expect(getIntersectionOfValues([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
  });

  test('should return the intersection of two arrays of strings', () => {
    expect(getIntersectionOfValues(['apple', 'banana', 'cherry'], ['banana', 'date', 'apple'])).toEqual(['apple', 'banana']);
  });

  test('should return an empty array if there is no intersection', () => {
    expect(getIntersectionOfValues([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(getIntersectionOfValues([], [1, 2, 3])).toEqual([]);
    expect(getIntersectionOfValues([1, 2, 3], [])).toEqual([]);
    expect(getIntersectionOfValues([], [])).toEqual([]);
  });

  test('should handle arrays with duplicate values', () => {
    expect(getIntersectionOfValues([1, 2, 2, 3], [2, 3, 3, 4])).toEqual([2, 2, 3]);
  });

  test('should handle mixed data types', () => {
    expect(getIntersectionOfValues([1, 'apple', 2], ['apple', 3, 1])).toEqual([1, 'apple']);
  });

  test('should return an empty array if any input is not an array', () => {
    expect(getIntersectionOfValues('not an array', [1, 2, 3])).toEqual([]);
    expect(getIntersectionOfValues([1, 2, 3], null)).toEqual([]);
    expect(getIntersectionOfValues(undefined, [])).toEqual([]);
    expect(getIntersectionOfValues({ a: 1 }, [1, 2])).toEqual([]);
  });
});
