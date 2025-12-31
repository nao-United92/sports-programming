import { dropWhileCustom } from './array-drop-while-custom-utils.js';

describe('dropWhileCustom', () => {
  it('should drop elements from the beginning while the predicate is true', () => {
    const users = [{ 'user': 'barney', 'active': true }, { 'user': 'fred', 'active': true }, { 'user': 'pebbles', 'active': false }];
    expect(dropWhileCustom(users, ({ active }) => active)).toEqual([{ 'user': 'pebbles', 'active': false }]);
  });

  it('should return the whole array if the first element does not satisfy the predicate', () => {
    expect(dropWhileCustom([1, 2, 3], (n) => n > 1)).toEqual([1, 2, 3]);
  });

  it('should return an empty array if all elements satisfy the predicate', () => {
    expect(dropWhileCustom([1, 2, 3], (n) => n < 4)).toEqual([]);
  });

  it('should handle an empty array', () => {
    expect(dropWhileCustom([], (n) => n > 0)).toEqual([]);
  });

  it('should not mutate the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    dropWhileCustom(arr, (n) => n < 2);
    expect(arr).toEqual(originalArr);
  });
});