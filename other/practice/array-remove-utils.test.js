import { remove } from './array-remove-utils.js';

describe('remove', () => {
  test('should remove elements based on a predicate', () => {
    let arr = [1, 2, 3, 4];
    const removed = remove(arr, n => n % 2 === 0);
    expect(arr).toEqual([1, 3]);
    expect(removed).toEqual([2, 4]);
  });

  test('should not modify the array if predicate returns false for all elements', () => {
    let arr = [1, 3, 5];
    const removed = remove(arr, n => n % 2 === 0);
    expect(arr).toEqual([1, 3, 5]);
    expect(removed).toEqual([]);
  });

  test('should empty the array if predicate returns true for all elements', () => {
    let arr = [2, 4, 6];
    const removed = remove(arr, n => n % 2 === 0);
    expect(arr).toEqual([]);
    expect(removed).toEqual([2, 4, 6]);
  });
});
