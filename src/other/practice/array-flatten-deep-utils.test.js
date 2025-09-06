import { flattenDeep } from './array-flatten-deep-utils.js';

describe('flattenDeep', () => {
  test('should flatten a nested array recursively', () => {
    const arr = [1, [2, [3, [4]]], 5];
    expect(flattenDeep(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    expect(flattenDeep([])).toEqual([]);
  });

  test('should handle a flat array', () => {
    const arr = [1, 2, 3];
    expect(flattenDeep(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an array with empty nested arrays', () => {
    const arr = [1, [], [2, []]];
    expect(flattenDeep(arr)).toEqual([1, 2]);
  });

  test('should handle non-array input', () => {
    expect(flattenDeep(null)).toEqual([]);
    expect(flattenDeep(undefined)).toEqual([]);
    expect(flattenDeep(123)).toEqual([]);
  });
});
