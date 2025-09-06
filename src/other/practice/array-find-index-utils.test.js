import { findIndex } from './array-find-index-utils.js';

describe('findIndex', () => {
  const users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  test('should return the index of the first element that satisfies the predicate', () => {
    expect(findIndex(users, ({ user }) => user === 'fred')).toBe(1);
  });

  test('should return -1 if no element satisfies the predicate', () => {
    expect(findIndex(users, ({ user }) => user === 'dino')).toBe(-1);
  });

  test('should return -1 for an empty array', () => {
    expect(findIndex([], ({ active }) => active)).toBe(-1);
  });

  test('should handle non-array input', () => {
    expect(findIndex(null, () => true)).toBe(-1);
    expect(findIndex(undefined, () => true)).toBe(-1);
  });
});
