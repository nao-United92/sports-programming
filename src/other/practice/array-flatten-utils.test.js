import { flatten } from './array-flatten-utils.js';

describe('flatten', () => {
  test('should flatten a nested array by one level', () => {
    const arr = [1, [2, [3]], 4];
    expect(flatten(arr)).toEqual([1, 2, [3], 4]);
  });

  test('should handle an empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  test('should handle a flat array', () => {
    const arr = [1, 2, 3];
    expect(flatten(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an array with empty nested arrays', () => {
    const arr = [1, [], [2, []]];
    expect(flatten(arr)).toEqual([1, 2, []]);
  });

  test('should handle non-array input', () => {
    expect(flatten(null)).toEqual([]);
    expect(flatten(undefined)).toEqual([]);
    expect(flatten(123)).toEqual([]);
  });
});
