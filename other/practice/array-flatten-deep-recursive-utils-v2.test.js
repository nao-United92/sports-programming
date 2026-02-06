const flattenDeepRecursiveV2 = require('./array-flatten-deep-recursive-utils-v2');

describe('flattenDeepRecursiveV2', () => {
  test('should deeply flatten a nested array', () => {
    const arr = [1, [2, [3, 4]], 5, [6]];
    expect(flattenDeepRecursiveV2(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should handle an array with no nested arrays', () => {
    const arr = [1, 2, 3, 4];
    expect(flattenDeepRecursiveV2(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should handle an empty array', () => {
    expect(flattenDeepRecursiveV2([])).toEqual([]);
  });

  test('should handle deeply nested empty arrays', () => {
    const arr = [1, [], [2, [], [3, []]], []];
    expect(flattenDeepRecursiveV2(arr)).toEqual([1, 2, 3]);
  });

  test('should handle mixed types in a deeply nested array', () => {
    const arr = [1, ['a', [true, null]], 5, [undefined]];
    expect(flattenDeepRecursiveV2(arr)).toEqual([1, 'a', true, null, 5, undefined]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => flattenDeepRecursiveV2(null)).toThrow('Expected an array');
    expect(() => flattenDeepRecursiveV2(123)).toThrow('Expected an array');
    expect(() => flattenDeepRecursiveV2('string')).toThrow('Expected an array');
    expect(() => flattenDeepRecursiveV2({})).toThrow('Expected an array');
  });
});
