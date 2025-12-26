const {
  union
} = require('./array-union-utils');

describe('union', () => {
  test('should return the union of two arrays', () => {
    expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should return the union of multiple arrays', () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(union()).toEqual([]);
  });

  test('should return the same array if only one array is provided', () => {
    expect(union([1, 2, 3])).toEqual([1, 2, 3]);
  });
});