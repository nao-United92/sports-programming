const { union } = require('./array-union-core');

describe('union', () => {
  it('should return the union of two arrays', () => {
    expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should return the union of multiple arrays', () => {
    expect(union([1, 2], [3, 4], [4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle arrays with duplicates', () => {
    expect(union([1, 2, 2], [2, 3, 3])).toEqual([1, 2, 3]);
  });

  it('should return a single array as is (with duplicates removed)', () => {
    expect(union([1, 1, 2])).toEqual([1, 2]);
  });

  it('should return an empty array if all input arrays are empty', () => {
    expect(union([], [])).toEqual([]);
  });

  it('should work with different data types', () => {
    expect(union(['a', 'b'], [1, 'b'])).toEqual(['a', 'b', 1]);
  });

  it('should throw an error if any argument is not an array', () => {
    expect(() => union([1, 2], 'not an array')).toThrow(TypeError);
    expect(() => union(null)).toThrow(TypeError);
  });
});
