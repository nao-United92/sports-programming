import { pull } from './array-pull-utils.js';

describe('pull', () => {
  test('should pull specified values from an array', () => {
    const arr = ['a', 'b', 'c', 'a', 'b', 'c'];
    expect(pull(arr, 'a', 'c')).toEqual(['b', 'b']);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    pull(arr, 2);
    expect(arr).toEqual(originalArr);
  });

  test('should return a new array', () => {
    const arr = [1, 2, 3];
    const result = pull(arr, 2);
    expect(result).not.toBe(arr);
  });

  test('should handle an empty array', () => {
    expect(pull([], 1, 2)).toEqual([]);
  });

  test('should handle non-array inputs', () => {
    expect(pull(null, 1)).toEqual([]);
    expect(pull(undefined, 1)).toEqual([]);
  });

  test('should do nothing if no values are specified to be pulled', () => {
    const arr = [1, 2, 3];
    expect(pull(arr)).toEqual([1, 2, 3]);
  });
});
