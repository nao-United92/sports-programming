import { without } from './array-without-utils.js';

describe('without', () => {
  test('should remove specified values from an array', () => {
    const arr = [1, 2, 3, 1, 2, 3];
    expect(without(arr, 1, 3)).toEqual([2, 2]);
  });

  test('should handle empty array', () => {
    expect(without([], 1, 2)).toEqual([]);
  });

  test('should handle no values to remove', () => {
    const arr = [1, 2, 3];
    expect(without(arr)).toEqual([1, 2, 3]);
  });

  test('should handle non-array input', () => {
    expect(without(null, 1)).toEqual([]);
    expect(without(undefined, 1)).toEqual([]);
  });
});
