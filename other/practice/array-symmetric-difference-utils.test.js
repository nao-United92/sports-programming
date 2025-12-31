import { symmetricDifference } from './array-symmetric-difference-utils.js';

describe('symmetricDifference', () => {
  it('should return the symmetric difference of two arrays', () => {
    expect(symmetricDifference([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 4, 5]);
  });

  it('should return an empty array if the arrays are the same', () => {
    expect(symmetricDifference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  it('should return the concatenation of the arrays if they have no common elements', () => {
    expect(symmetricDifference([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should handle empty arrays', () => {
    expect(symmetricDifference([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(symmetricDifference([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(symmetricDifference([], [])).toEqual([]);
  });
});