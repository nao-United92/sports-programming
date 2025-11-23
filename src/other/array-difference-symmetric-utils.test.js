import { differenceSymmetric } from './array-difference-symmetric-utils';

describe('differenceSymmetric', () => {
  it('should return the symmetric difference of two arrays', () => {
    expect(differenceSymmetric([1, 2, 3], [1, 2, 4])).toEqual([3, 4]);
  });

  it('should return an empty array if the arrays are the same', () => {
    expect(differenceSymmetric([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  it('should return all unique elements if there is no intersection', () => {
    expect(differenceSymmetric([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should handle empty arrays', () => {
    expect(differenceSymmetric([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(differenceSymmetric([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle non-array inputs gracefully', () => {
    expect(differenceSymmetric(null, [1, 2])).toEqual([]);
    expect(differenceSymmetric([1, 2], undefined)).toEqual([]);
  });

  it('should handle arrays with duplicate values', () => {
    expect(differenceSymmetric([1, 2, 2, 3], [1, 4, 4])).toEqual([2, 2, 3, 4, 4]);
  });
});
