import { rangeIntersection } from './array-range-intersection';

describe('rangeIntersection', () => {
  test('should return the intersection of two ranges', () => {
    expect(rangeIntersection([1, 5], [3, 8])).toEqual([3, 5]);
    expect(rangeIntersection([1, 10], [5, 6])).toEqual([5, 6]);
  });

  test('should return null for non-overlapping ranges', () => {
    expect(rangeIntersection([1, 5], [6, 10])).toBe(null);
  });

  test('should return a point for touching ranges', () => {
    expect(rangeIntersection([1, 5], [5, 10])).toEqual([5, 5]);
  });
});
