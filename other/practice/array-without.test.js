import { without } from './array-without.js';

describe('without', () => {
  test('returns an array with the specified values removed', () => {
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  });

  test('returns the original array if no values are specified to remove', () => {
    expect(without([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('returns an empty array if all elements are removed', () => {
    expect(without([1, 2, 2], 1, 2)).toEqual([]);
  });

  test('does not modify the original array', () => {
    const arr = [1, 2, 3];
    without(arr, 1);
    expect(arr).toEqual([1, 2, 3]);
  });
});
