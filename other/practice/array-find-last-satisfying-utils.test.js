import { findLastSatisfying } from './array-find-last-satisfying-utils.js';

describe('findLastSatisfying', () => {
  const users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1, 'active': false },
    { 'user': 'dino', 'age': 40, 'active': false }
  ];

  it('should return the last element that satisfies the predicate', () => {
    expect(findLastSatisfying(users, ({ age }) => age === 40)).toEqual({ 'user': 'dino', 'age': 40, 'active': false });
  });

  it('should return undefined if no element satisfies the predicate', () => {
    expect(findLastSatisfying(users, ({ age }) => age > 50)).toBeUndefined();
  });

  it('should return undefined for an empty array', () => {
    expect(findLastSatisfying([], (x) => x > 0)).toBeUndefined();
  });

  it('should handle predicate using index', () => {
    const arr = [10, 20, 30, 40];
    expect(findLastSatisfying(arr, (val, idx) => idx < 2)).toBe(20);
  });
});