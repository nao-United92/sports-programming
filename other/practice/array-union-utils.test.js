import union from './array-union-utils';

describe('union', () => {
  it('should return an array with unique values from all given arrays', () => {
    expect(union([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle empty arrays', () => {
    expect(union([], [1, 2], [])).toEqual([1, 2]);
  });

  it('should handle arrays with different types of elements', () => {
    expect(union([1, 'a'], ['a', 2], [3])).toEqual([1, 'a', 2, 3]);
  });

  it('should return an empty array if all input arrays are empty', () => {
    expect(union([], [], [])).toEqual([]);
  });

  it('should work with a single array', () => {
    expect(union([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle duplicate values within a single array', () => {
    expect(union([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
  });
});