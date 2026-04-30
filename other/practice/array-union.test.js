const union = require('./array-union');

describe('union', () => {
  test('should return unique values from multiple arrays', () => {
    expect(union([2, 1], [2, 3])).toEqual([2, 1, 3]);
  });

  test('should handle more than two arrays', () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(union()).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(union([], [1, 2], [])).toEqual([1, 2]);
  });
});
