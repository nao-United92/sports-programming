import { pull } from './array-pull-utils';

describe('pull', () => {
  test('should remove all given values from array', () => {
    const arr = ['a', 'b', 'c', 'a', 'b'];
    pull(arr, 'a', 'c');
    expect(arr).toEqual(['b', 'b']);
  });

  test('should modify the original array in place', () => {
    const arr = [1, 2, 3, 1];
    pull(arr, 1);
    expect(arr).toEqual([2, 3]);
  });

  test('should handle values not present in the array', () => {
    const arr = [1, 2, 3];
    pull(arr, 4, 5);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should handle empty array', () => {
    const arr = [];
    pull(arr, 1, 2);
    expect(arr).toEqual([]);
  });

  test('should handle no values to pull', () => {
    const arr = [1, 2, 3];
    pull(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should handle different data types', () => {
    const arr = [1, 'a', 2, 'b', 1];
    pull(arr, 'a', 1);
    expect(arr).toEqual([2, 'b']);
  });
});