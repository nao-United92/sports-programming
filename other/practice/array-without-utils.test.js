import { without } from './array-without-utils';

describe('without', () => {
  test('should return a new array excluding all given values', () => {
    expect(without([1, 2, 3, 1, 2], 1, 2)).toEqual([3]);
  });

  test('should handle single value to exclude', () => {
    expect(without([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('should handle no values to exclude', () => {
    expect(without([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle empty array', () => {
    expect(without([], 1, 2)).toEqual([]);
  });

  test('should handle values that are not present in the array', () => {
    expect(without([1, 2, 3], 4, 5)).toEqual([1, 2, 3]);
  });

  test('should handle different data types', () => {
    expect(without([1, 'a', 2, 'b'], 'a', 2)).toEqual([1, 'b']);
  });
});