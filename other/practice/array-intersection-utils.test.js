import intersection from './array-intersection-utils';

describe('intersection', () => {
  test('should return the intersection of two arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test('should handle multiple arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4], [2, 5])).toEqual([2]);
  });

  test('should return an empty array if no common elements', () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(intersection([], [1, 2, 3])).toEqual([]);
    expect(intersection([1, 2, 3], [])).toEqual([]);
  });
});
