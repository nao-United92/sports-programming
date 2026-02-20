import { findLast } from './array-find-last';

describe('findLast', () => {
  test('returns the last element satisfying the predicate', () => {
    const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    expect(findLast(arr, x => x > 3)).toBe(4);
  });

  test('returns undefined if no element satisfies the predicate', () => {
    const arr = [1, 2, 3];
    expect(findLast(arr, x => x > 5)).toBeUndefined();
  });

  test('works with objects', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 1 }];
    expect(findLast(arr, x => x.id === 1)).toEqual({ id: 1 });
  });
});
