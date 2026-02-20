import { intersect } from './array-intersect';

describe('intersect', () => {
  test('returns the intersection of two arrays', () => {
    expect(intersect([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test('returns an empty array if no intersection', () => {
    expect(intersect([1, 2], [3, 4])).toEqual([]);
  });

  test('handles duplicates in input arrays', () => {
    expect(intersect([1, 2, 2], [2, 2, 3])).toEqual([2]);
  });
});
