const {
  xor
} = require('./array-xor-utils');

describe('xor', () => {
  test('should return the symmetric difference of two arrays', () => {
    expect(xor([2, 1], [2, 3])).toEqual([1, 3]);
  });

  test('should handle multiple arrays', () => {
    expect(xor([1, 2], [2, 3], [3, 4])).toEqual([1, 4]);
  });

  test('should return an empty array if all arrays are the same', () => {
    expect(xor([1, 2], [1, 2])).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(xor([1, 2], [])).toEqual([1, 2]);
    expect(xor([], [1, 2])).toEqual([1, 2]);
    expect(xor([], [])).toEqual([]);
  });
});