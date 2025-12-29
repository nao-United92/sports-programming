import { drop } from './array-drop-utils';

describe('drop', () => {
  test('should drop n elements from the beginning of an array', () => {
    expect(drop([1, 2, 3], 1)).toEqual([2, 3]);
  });

  test('should drop 1 element by default', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  test('should return an empty array if n is greater than or equal to array length', () => {
    expect(drop([1, 2, 3], 3)).toEqual([]);
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  test('should return the original array if n is 0', () => {
    const arr = [1, 2, 3];
    expect(drop(arr, 0)).toEqual([1, 2, 3]);
    expect(drop(arr, 0)).not.toBe(arr); // Should return a shallow copy
  });

  test('should return the original array if n is negative', () => {
    const arr = [1, 2, 3];
    expect(drop(arr, -1)).toEqual([1, 2, 3]);
    expect(drop(arr, -1)).not.toBe(arr); // Should return a shallow copy
  });

  test('should return an empty array for an empty input array', () => {
    expect(drop([], 2)).toEqual([]);
  });

  test('should handle arrays with mixed data types', () => {
    expect(drop([1, 'a', true, null], 2)).toEqual([true, null]);
  });
});