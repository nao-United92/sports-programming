import { compact } from './array-compact-utils.js';

describe('compact', () => {
  test('should remove falsey values from an array', () => {
    const arr = [0, 1, false, 2, '', 3, null, undefined, NaN];
    expect(compact(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an empty array', () => {
    expect(compact([])).toEqual([]);
  });

  test('should handle an array with no falsey values', () => {
    const arr = [1, 2, 3];
    expect(compact(arr)).toEqual([1, 2, 3]);
  });

  test('should handle non-array input', () => {
    expect(compact(null)).toEqual([]);
    expect(compact(undefined)).toEqual([]);
    expect(compact(123)).toEqual([]);
  });
});
