import { flatten } from './flatten-utils.js';

describe('flatten', () => {
  test('should flatten a nested array', () => {
    expect(flatten([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  test('should handle a non-array input', () => {
    expect(flatten(1)).toEqual([]);
    expect(flatten('string')).toEqual([]);
    expect(flatten(null)).toEqual([]);
    expect(flatten(undefined)).toEqual([]);
  });

  test('should handle an array with no nested arrays', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
