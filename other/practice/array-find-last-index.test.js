import { findLastIndex } from './array-find-last-index.js';

describe('findLastIndex', () => {
  it('returns the index of the last element that satisfies a predicate', () => {
    expect(findLastIndex([1, 2, 3, 4], (n) => n % 2 === 1)).toBe(2);
  });

  it('returns -1 if no element satisfies the predicate', () => {
    expect(findLastIndex([1, 2, 3, 4], (n) => n > 5)).toBe(-1);
  });

  it('returns the index for zero-th element if it matches', () => {
    expect(findLastIndex([1, 2, 3], (n) => n === 1)).toBe(0);
  });

  it('handles empty arrays', () => {
    expect(findLastIndex([], (n) => n > 0)).toBe(-1);
  });
});
