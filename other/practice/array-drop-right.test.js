import { dropRight } from './array-drop-right';

describe('dropRight', () => {
  test('should drop N elements from the end of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(dropRight(arr, 2)).toEqual([1, 2, 3]);
  });

  test('should drop 1 element by default', () => {
    const arr = [1, 2, 3];
    expect(dropRight(arr)).toEqual([1, 2]);
  });

  test('should return an empty array if N is greater than or equal to array length', () => {
    const arr = [1, 2, 3];
    expect(dropRight(arr, 3)).toEqual([]);
    expect(dropRight(arr, 5)).toEqual([]);
  });

  test('should return the original array if N is 0', () => {
    const arr = [1, 2, 3];
    expect(dropRight(arr, 0)).toEqual([1, 2, 3]);
  });

  test('should return an empty array if input array is empty', () => {
    const arr = [];
    expect(dropRight(arr, 2)).toEqual([]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', true, null];
    expect(dropRight(arr, 1)).toEqual([1, 'a', true]);
  });

  test('should handle negative N as 0', () => {
    const arr = [1, 2, 3];
    expect(dropRight(arr, -1)).toEqual([1, 2, 3]);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    dropRight(arr, 1);
    expect(arr).toEqual(originalArr);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(dropRight(null, 2)).toEqual([]);
    expect(dropRight(undefined, 2)).toEqual([]);
    expect(dropRight('string', 2)).toEqual([]);
  });
});
