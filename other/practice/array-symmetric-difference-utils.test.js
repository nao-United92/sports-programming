import { symmetricDifference } from './array-symmetric-difference-utils.js';

describe('symmetricDifference', () => {
  test('should return the symmetric difference of two arrays', () => {
    const result = symmetricDifference([1, 2, 3], [2, 3, 4]);
    expect(result.sort()).toEqual([1, 4].sort());
  });

  test('should return all unique elements if there is no intersection', () => {
    const result = symmetricDifference([1, 2], [3, 4]);
    expect(result.sort()).toEqual([1, 2, 3, 4].sort());
  });

  test('should return an empty array if the arrays are identical', () => {
    expect(symmetricDifference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  test('should handle empty arrays', () => {
    const result = symmetricDifference([1, 2, 3], []);
    expect(result.sort()).toEqual([1, 2, 3].sort());
  });
});
