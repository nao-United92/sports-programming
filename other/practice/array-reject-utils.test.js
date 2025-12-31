import { reject } from './array-reject-utils.js';

describe('reject', () => {
  const users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1, 'active': false }
  ];

  it('should return elements for which the predicate returns falsey', () => {
    expect(reject(users, ({ active }) => active)).toEqual([
      { 'user': 'barney', 'age': 36, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': false }
    ]);
  });

  it('should return an empty array if all elements satisfy the predicate', () => {
    expect(reject([1, 2, 3], (n) => n < 4)).toEqual([]);
  });

  it('should return the original array if no elements satisfy the predicate', () => {
    expect(reject([1, 2, 3], (n) => n > 3)).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(reject([], (n) => n > 0)).toEqual([]);
  });

  it('should not mutate the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    reject(arr, (n) => n > 2);
    expect(arr).toEqual(originalArr);
  });
});