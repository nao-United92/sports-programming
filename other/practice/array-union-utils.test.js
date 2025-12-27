const { union } = require('./array-union-utils');

describe('union', () => {
  it('should return the union of multiple arrays', () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should handle arrays with different data types', () => {
    expect(union([1, 'a'], [2, 'b', 'a'])).toEqual([1, 'a', 2, 'b']);
  });

  it('should return a single array unchanged if only one is provided', () => {
    expect(union([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should return an empty array if no arrays are provided', () => {
    expect(union()).toEqual([]);
  });

  it('should handle empty arrays', () => {
    expect(union([], [1, 2], [])).toEqual([1, 2]);
  });
});
