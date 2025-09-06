import { pull } from './array-pull-utils.js';

describe('pull', () => {
  test('should remove specified values from an array', () => {
    const arr = [1, 2, 3, 1, 2, 3];
    expect(pull(arr, 1, 3)).toEqual([2, 2]);
  });

  test('should handle empty array', () => {
    expect(pull([], 1, 2)).toEqual([]);
  });

  test('should handle no values to remove', () => {
    const arr = [1, 2, 3];
    expect(pull(arr)).toEqual([1, 2, 3]);
  });

  test('should handle non-array input', () => {
    expect(pull(null, 1)).toEqual([]);
    expect(pull(undefined, 1)).toEqual([]);
  });
});
