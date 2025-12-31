import { takeWhile } from './array-take-while-utils.js';

describe('takeWhile', () => {
  it('should take elements from the beginning while the predicate is true', () => {
    const users = [{ 'user': 'barney', 'active': false }, { 'user': 'fred', 'active': true }, { 'user': 'pebbles', 'active': false }];
    expect(takeWhile(users, ({ active }) => !active)).toEqual([{ 'user': 'barney', 'active': false }]);
  });

  it('should return an empty array if the first element does not satisfy the predicate', () => {
    expect(takeWhile([1, 2, 3], (n) => n > 1)).toEqual([]);
  });

  it('should return the whole array if all elements satisfy the predicate', () => {
    expect(takeWhile([1, 2, 3], (n) => n < 4)).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(takeWhile([], (n) => n > 0)).toEqual([]);
  });

  it('should not mutate the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    takeWhile(arr, (n) => n < 2);
    expect(arr).toEqual(originalArr);
  });
});