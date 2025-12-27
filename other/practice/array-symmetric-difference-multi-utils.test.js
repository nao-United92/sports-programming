import symmetricDifference from './array-symmetric-difference-multi-utils';

describe('symmetricDifference', () => {
  it('should return the symmetric difference of two arrays', () => {
    expect(symmetricDifference([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 4, 5]);
  });

  it('should return the symmetric difference of multiple arrays', () => {
    expect(symmetricDifference([1, 2], [2, 3], [3, 4])).toEqual([1, 4]);
  });

  it('should handle empty arrays', () => {
    expect(symmetricDifference([], [1, 2], [])).toEqual([1, 2]);
  });

  it('should handle arrays with different types of elements', () => {
    expect(symmetricDifference([1, 'a'], ['a', 2], [3])).toEqual([1, 2, 3]);
  });

  it('should return an empty array if all input arrays are empty', () => {
    expect(symmetricDifference([], [], [])).toEqual([]);
  });

  it('should work with a single array', () => {
    expect(symmetricDifference([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle duplicate values within a single array correctly', () => {
    expect(symmetricDifference([1, 1, 2, 2, 3])).toEqual([3]);
  });

  it('should correctly identify elements unique across all arrays', () => {
    expect(symmetricDifference([1, 2, 3, 6], [2, 3, 4, 7], [3, 5, 8]).sort()).toEqual([1, 3, 4, 5, 6, 7, 8].sort());
  });
});