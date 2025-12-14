import difference from './array-difference-utils';

describe('difference', () => {
  test('should return the difference of two arrays', () => {
    expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
  });

  test('should handle multiple arrays to subtract', () => {
    expect(difference([1, 2, 3, 4, 5], [2, 3], [4, 5])).toEqual([1]);
  });

  test('should return the original array if no common elements', () => {
    expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    expect(difference([], [1, 2, 3])).toEqual([]);
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
  });
});
