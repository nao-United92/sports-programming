import { findLastIndex } from './array-find-last-index-utils';

describe('findLastIndex', () => {
  const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false },
    { 'user': 'fred', 'active': true }
  ];

  it('should return the last index of the element that satisfies the predicate', () => {
    expect(findLastIndex(users, o => o.user === 'fred')).toBe(3);
  });

  it('should return -1 if no element satisfies the predicate', () => {
    expect(findLastIndex(users, o => o.user === 'wilma')).toBe(-1);
  });

  it('should return -1 for an empty array', () => {
    expect(findLastIndex([], o => o.active)).toBe(-1);
  });

  it('should handle non-array inputs gracefully', () => {
    expect(findLastIndex(null, o => o.active)).toBe(-1);
    expect(findLastIndex(undefined, o => o.active)).toBe(-1);
  });

  it('should handle non-function predicate gracefully', () => {
    expect(findLastIndex(users, null)).toBe(-1);
    expect(findLastIndex(users, 'user')).toBe(-1);
  });
});
