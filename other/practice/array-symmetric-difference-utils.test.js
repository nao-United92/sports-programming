const {
  symmetricDifference
} = require('./array-symmetric-difference-utils');

describe('symmetricDifference', () => {
  test('should return the symmetric difference of two arrays', () => {
    expect(symmetricDifference([1, 2, 3], [2, 3, 4])).toEqual([1, 4]);
  });

  test('should return an empty array if the arrays are the same', () => {
    expect(symmetricDifference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  test('should return the concatenation of the arrays if they have no common elements', () => {
    expect(symmetricDifference([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle empty arrays', () => {
    expect(symmetricDifference([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(symmetricDifference([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(symmetricDifference([], [])).toEqual([]);
  });
});