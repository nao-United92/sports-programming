import union from './array-union-utils';

describe('union', () => {
  test('should return the union of two arrays', () => {
    expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle multiple arrays', () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle arrays with no common elements', () => {
    expect(union([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle empty arrays', () => {
    expect(union([], [1, 2])).toEqual([1, 2]);
    expect(union([1, 2], [])).toEqual([1, 2]);
  });
});
