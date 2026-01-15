import { without } from './array-without-utils.js';

describe('without', () => {
  test('should return an array without the specified values', () => {
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    without(arr, 1);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should return the array if no values are specified', () => {
    expect(without([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should return an empty array for an empty array', () => {
    expect(without([], 1, 2)).toEqual([]);
  });
});