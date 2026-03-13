import { symmetricDifference } from './array-symmetric-difference.js';

describe('symmetricDifference', () => {
  test('returns the symmetric difference of two arrays', () => {
    expect(symmetricDifference([1, 2, 3], [1, 2, 4])).toEqual([3, 4]);
  });

  test('returns the union of two arrays if they are disjoint', () => {
    expect(symmetricDifference([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('returns an empty array if both arrays are identical', () => {
    expect(symmetricDifference([1, 2], [1, 2])).toEqual([]);
  });

  test('works with duplicate values', () => {
    expect(symmetricDifference([1, 2, 2], [1, 3])).toEqual([2, 2, 3]);
  });
});
