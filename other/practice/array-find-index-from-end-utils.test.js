import { findIndexFromEnd } from './array-find-index-from-end-utils.js';

describe('findIndexFromEnd', () => {
  const users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': true },
    { 'user': 'pebbles', 'active': false },
    { 'user': 'dino', 'active': true }
  ];

  it('should return the last index that satisfies the predicate', () => {
    expect(findIndexFromEnd(users, ({ active }) => active)).toBe(3);
  });

  it('should return -1 if no element satisfies the predicate', () => {
    expect(findIndexFromEnd(users, ({ age }) => age > 50)).toBe(-1);
  });

  it('should return -1 for an empty array', () => {
    expect(findIndexFromEnd([], (x) => x > 0)).toBe(-1);
  });

  it('should handle predicate using index', () => {
    const arr = [10, 20, 30, 40];
    expect(findIndexFromEnd(arr, (val, idx) => idx < 2)).toBe(1);
  });
});