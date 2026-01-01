const { difference } = require('./array-difference-calculator-utils');

describe('difference', () => {
  test('should return the difference between two arrays', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });

  test('should handle multiple arrays to compare', () => {
    expect(difference([1, 2, 3, 4], [2], [3])).toEqual([1, 4]);
  });
  
  test('should return the original array if no values are provided', () => {
    expect(difference([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    expect(difference([], [1, 2])).toEqual([]);
    expect(difference([1, 2], [])).toEqual([1, 2]);
  });

  test('should handle non-array inputs', () => {
    expect(difference(null)).toEqual([]);
    expect(difference(undefined)).toEqual([]);
  });

  test('should handle different data types', () => {
    expect(difference([1, '2', 3], [1, 3])).toEqual(['2']);
  });
});
