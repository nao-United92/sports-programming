const { xor } = require('./array-xor-utils');

describe('xor', () => {
  it('should return the symmetric difference of two arrays', () => {
    expect(xor([1, 2], [2, 3]).sort()).toEqual([1, 3].sort());
  });

  it('should return the symmetric difference of multiple arrays', () => {
    expect(xor([1, 2, 5], [2, 3, 5], [3, 4, 5]).sort()).toEqual([1, 4, 5].sort());
  });

  it('should handle arrays with different data types', () => {
    // Note: Sorting behavior can be tricky with mixed types.
    // This test assumes a consistent sort order for the given inputs.
    const result = xor([1, 'a'], ['a', 2]);
    const expected = [1, 2];
    expect(result.sort((a, b) => String(a).localeCompare(String(b))))
      .toEqual(expected.sort((a, b) => String(a).localeCompare(String(b))));
  });

  it('should return an array with unique values if only one array is provided', () => {
    expect(xor([1, 2, 2, 3]).sort()).toEqual([1, 3].sort());
  });

  it('should return an empty array if no arrays are provided', () => {
    expect(xor()).toEqual([]);
  });

  it('should handle empty arrays correctly', () => {
    expect(xor([], [1, 2]).sort()).toEqual([1, 2].sort());
    expect(xor([1, 2], []).sort()).toEqual([1, 2].sort());
  });
});

