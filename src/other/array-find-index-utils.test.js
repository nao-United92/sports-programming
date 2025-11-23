import { findIndex } from './array-find-index-utils';

describe('findIndex', () => {
  const users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  it('should return the index of the first element that satisfies the predicate', () => {
    expect(findIndex(users, o => o.user === 'barney')).toBe(0);
  });

  it('should return -1 if no element satisfies the predicate', () => {
    expect(findIndex(users, o => o.user === 'wilma')).toBe(-1);
  });

  it('should return -1 for an empty array', () => {
    expect(findIndex([], o => o.active)).toBe(-1);
  });

  it('should handle non-array inputs gracefully', () => {
    expect(findIndex(null, o => o.active)).toBe(-1);
    expect(findIndex(undefined, o => o.active)).toBe(-1);
  });

  it('should handle non-function predicate gracefully', () => {
    expect(findIndex(users, null)).toBe(-1);
    expect(findIndex(users, 'user')).toBe(-1);
  });

  it('should pass value, index, and array to the predicate', () => {
    const predicate = jest.fn((value, index, arr) => value.user === 'pebbles');
    findIndex(users, predicate);
    expect(predicate).toHaveBeenCalledWith(users[0], 0, users);
    expect(predicate).toHaveBeenCalledWith(users[1], 1, users);
    expect(predicate).toHaveBeenCalledWith(users[2], 2, users);
  });
});