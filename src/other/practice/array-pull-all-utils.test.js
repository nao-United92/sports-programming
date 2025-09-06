import { pullAll } from './array-pull-all-utils.js';

describe('pullAll', () => {
  test('should remove all specified values from an array', () => {
    const arr = [1, 2, 3, 1, 2, 3];
    expect(pullAll(arr, [1, 3])).toEqual([2, 2]);
  });

  test('should handle empty array', () => {
    expect(pullAll([], [1, 2])).toEqual([]);
  });

  test('should handle empty values array', () => {
    const arr = [1, 2, 3];
    expect(pullAll(arr, [])).toEqual([1, 2, 3]);
  });

  test('should handle non-array input', () => {
    expect(pullAll(null, [1])).toEqual([]);
    expect(pullAll(undefined, [1])).toEqual([]);
  });
});
