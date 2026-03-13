import { intersection } from './array-intersection.js';

describe('intersection', () => {
  it('returns the intersection of two arrays', () => {
    expect(intersection([1, 2, 3], [4, 3, 2])).toEqual([2, 3]);
  });

  it('returns the intersection of multiple arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([3]);
  });

  it('returns an empty array if no intersection', () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it('handles empty arrays', () => {
    expect(intersection([], [1, 2, 3])).toEqual([]);
  });
});
