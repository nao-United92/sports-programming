import { intersection } from './array-intersection-utils.js';

describe('intersection', () => {
  test('should return the intersection of two arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test('should return the intersection of multiple arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([3]);
  });

  test('should return an empty array if there is no intersection', () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(intersection([], [1, 2])).toEqual([]);
  });
});
