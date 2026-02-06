const flattenRecursive = require('./array-flatten-with-recursion-utils');

describe('flattenRecursive', () => {
  test('should deeply flatten a nested array', () => {
    const arr = [1, [2, [3, 4]], 5, [6]];
    expect(flattenRecursive(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should handle an array with no nested arrays', () => {
    const arr = [1, 2, 3, 4];
    expect(flattenRecursive(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should handle an empty array', () => {
    expect(flattenRecursive([])).toEqual([]);
  });

  test('should handle deeply nested empty arrays', () => {
    const arr = [1, [], [2, [], [3, []]], []];
    expect(flattenRecursive(arr)).toEqual([1, 2, 3]);
  });

  test('should handle mixed types in a deeply nested array', () => {
    const arr = [1, ['a', [true, null]], 5, [undefined]];
    expect(flattenRecursive(arr)).toEqual([1, 'a', true, null, 5, undefined]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => flattenRecursive(null)).toThrow('Expected an array');
    expect(() => flattenRecursive(123)).toThrow('Expected an array');
    expect(() => flattenRecursive('string')).toThrow('Expected an array');
    expect(() => flattenRecursive({})).toThrow('Expected an array');
  });
});
