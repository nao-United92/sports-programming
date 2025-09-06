import { findLast } from './array-find-last-utils.js';

describe('findLast', () => {
  const users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  test('should return the last element that satisfies the predicate', () => {
    expect(findLast(users, ({ active }) => active)).toEqual({ 'user': 'pebbles', 'active': true });
  });

  test('should return undefined if no element satisfies the predicate', () => {
    expect(findLast(users, ({ active }) => active === null)).toBeUndefined();
  });

  test('should return undefined for an empty array', () => {
    expect(findLast([], ({ active }) => active)).toBeUndefined();
  });

  test('should handle non-array input', () => {
    expect(findLast(null, () => true)).toBeUndefined();
    expect(findLast(undefined, () => true)).toBeUndefined();
  });
});
