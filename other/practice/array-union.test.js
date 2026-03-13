import { union } from './array-union.js';

describe('union', () => {
  it('returns the union of two arrays', () => {
    expect(union([1, 2, 3], [4, 3, 2])).toEqual([1, 2, 3, 4]);
  });

  it('returns the union of multiple arrays', () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('handles empty arrays', () => {
    expect(union([], [1, 2])).toEqual([1, 2]);
  });
});
