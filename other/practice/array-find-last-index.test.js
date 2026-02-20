import { findLastIndex } from './array-find-last-index';

describe('findLastIndex', () => {
  test('returns the index of the last element satisfying the predicate', () => {
    const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    expect(findLastIndex(arr, x => x > 3)).toBe(5);
  });

  test('returns -1 if no element satisfies the predicate', () => {
    const arr = [1, 2, 3];
    expect(findLastIndex(arr, x => x > 5)).toBe(-1);
  });

  test('works with objects', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 1 }];
    expect(findLastIndex(arr, x => x.id === 1)).toBe(2);
  });
});
