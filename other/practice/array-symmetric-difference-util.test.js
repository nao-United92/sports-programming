const symmetricDifference = require('./array-symmetric-difference-util');

describe('symmetricDifference', () => {
  it('should return the symmetric difference of two arrays', () => {
    expect(symmetricDifference([1, 2, 3], [1, 2, 4])).toEqual([3, 4]);
  });

  it('should return all unique elements if there are no common elements', () => {
    expect(symmetricDifference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return an empty array if the arrays are identical', () => {
    expect(symmetricDifference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  it('should handle empty arrays correctly', () => {
    expect(symmetricDifference([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(symmetricDifference([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(symmetricDifference([], [])).toEqual([]);
  });

  it('should handle arrays with different data types', () => {
    expect(symmetricDifference([1, 'a', true], [1, 'b', false])).toEqual(['a', true, 'b', false]);
  });
});
