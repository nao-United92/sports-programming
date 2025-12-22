import { symmetricDifference } from './array-symmetric-difference-utils';

describe('symmetricDifference', () => {
  it('should return the symmetric difference of two arrays', () => {
    expect(symmetricDifference([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 4, 5]);
  });

  it('should handle empty arrays', () => {
    expect(symmetricDifference([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(symmetricDifference([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(symmetricDifference([], [])).toEqual([]);
  });

  it('should handle non-array inputs', () => {
    expect(symmetricDifference(null, [1, 2, 3])).toEqual([]);
    expect(symmetricDifference([1, 2, 3], null)).toEqual([]);
    expect(symmetricDifference(undefined, [1, 2, 3])).toEqual([]);
    expect(symmetricDifference([1, 2, 3], undefined)).toEqual([]);
  });
});
