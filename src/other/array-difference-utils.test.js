const { difference } = require('./array-difference-utils');

describe('difference', () => {
  test('should return the difference of two arrays', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });

  test('should handle multiple arrays to compare', () => {
    expect(difference([1, 2, 3, 4, 5], [5, 2], [10, 1])).toEqual([3, 4]);
  });

  test('should return an empty array if there is no difference', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  test('should return the original array if the second array is empty', () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test('should return an empty array if the first array is empty', () => {
    expect(difference([], [1, 2, 3])).toEqual([]);
  });

  test('should work with different data types', () => {
    expect(difference([1, '2', 3], [1, 2, 3])).toEqual(['2']);
  });
});