import symmetricDifference from './array-symmetric-difference-utils';

describe('symmetricDifference', () => {
  test('should return the symmetric difference of two arrays', () => {
    expect(symmetricDifference([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 4, 5]);
  });

  test('should work with arrays containing different types', () => {
    expect(symmetricDifference([1, 'a', 3], [3, 'b', 5])).toEqual([1, 'a', 'b', 5]);
  });

  test('should return an empty array if both arrays are identical', () => {
    expect(symmetricDifference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  test('should handle empty arrays correctly', () => {
    expect(symmetricDifference([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(symmetricDifference([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(symmetricDifference([], [])).toEqual([]);
  });

  test('should return an empty array for non-array inputs', () => {
    expect(symmetricDifference([1, 2], null)).toEqual([]);
    expect(symmetricDifference(undefined, [1, 2])).toEqual([]);
  });
});
