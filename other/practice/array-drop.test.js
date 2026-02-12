import { drop } from './array-drop';

describe('drop', () => {
  test('should drop N elements from the beginning of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(drop(arr, 2)).toEqual([3, 4, 5]);
  });

  test('should drop 1 element by default', () => {
    const arr = [1, 2, 3];
    expect(drop(arr)).toEqual([2, 3]);
  });

  test('should return an empty array if N is greater than or equal to array length', () => {
    const arr = [1, 2, 3];
    expect(drop(arr, 3)).toEqual([]);
    expect(drop(arr, 5)).toEqual([]);
  });

  test('should return the original array if N is 0', () => {
    const arr = [1, 2, 3];
    expect(drop(arr, 0)).toEqual([1, 2, 3]);
  });

  test('should return an empty array if input array is empty', () => {
    const arr = [];
    expect(drop(arr, 2)).toEqual([]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', true, null];
    expect(drop(arr, 1)).toEqual(['a', true, null]);
  });

  test('should handle negative N as 0', () => {
    const arr = [1, 2, 3];
    expect(drop(arr, -1)).toEqual([1, 2, 3]);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    drop(arr, 1);
    expect(arr).toEqual(originalArr);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(drop(null, 2)).toEqual([]);
    expect(drop(undefined, 2)).toEqual([]);
    expect(drop('string', 2)).toEqual([]);
  });
});
