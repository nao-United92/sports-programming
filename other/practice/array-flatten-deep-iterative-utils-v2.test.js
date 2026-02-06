const flattenDeepIterativeV2 = require('./array-flatten-deep-iterative-utils-v2');

describe('flattenDeepIterativeV2', () => {
  test('should deeply flatten a nested array (BFS order)', () => {
    const arr = [1, [2, [3, 4]], 5, [6]];
    expect(flattenDeepIterativeV2(arr)).toEqual([1, 2, 5, 6, 3, 4]);
  });

  test('should handle an array with no nested arrays', () => {
    const arr = [1, 2, 3, 4];
    expect(flattenDeepIterativeV2(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should handle an empty array', () => {
    expect(flattenDeepIterativeV2([])).toEqual([]);
  });

  test('should handle deeply nested empty arrays', () => {
    const arr = [1, [], [2, [], [3, []]], []];
    expect(flattenDeepIterativeV2(arr)).toEqual([1, 2, 3]);
  });

  test('should handle mixed types in a deeply nested array', () => {
    const arr = [1, ['a', [true, null]], 5, [undefined]];
    expect(flattenDeepIterativeV2(arr)).toEqual([1, 'a', 5, undefined, true, null]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => flattenDeepIterativeV2(null)).toThrow('Expected an array');
    expect(() => flattenDeepIterativeV2(123)).toThrow('Expected an array');
    expect(() => flattenDeepIterativeV2('string')).toThrow('Expected an array');
    expect(() => flattenDeepIterativeV2({})).toThrow('Expected an array');
  });
});
