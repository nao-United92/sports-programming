const flattenDeepRecursive = require('./array-flatten-deep-recursive-utils');

describe('flattenDeepRecursive', () => {
  test('should flatten a deeply nested array', () => {
    const arr = [1, [2, [3, [4, 5]]], 6];
    expect(flattenDeepRecursive(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should handle a singly nested array', () => {
    const arr = [1, [2, 3], 4];
    expect(flattenDeepRecursive(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should return the same array if it is already flat', () => {
    const arr = [1, 2, 3, 4];
    expect(flattenDeepRecursive(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(flattenDeepRecursive([])).toEqual([]);
  });

  test('should handle arrays with empty nested arrays', () => {
    const arr = [1, [],
      [2, []],
      [
        []
      ], 3
    ];
    expect(flattenDeepRecursive(arr)).toEqual([1, 2, 3]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, ['a', [true, null]], {
      b: 2
    }];
    expect(flattenDeepRecursive(arr)).toEqual([1, 'a', true, null, {
      b: 2
    }]);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(flattenDeepRecursive(null)).toEqual([]);
    expect(flattenDeepRecursive(undefined)).toEqual([]);
    expect(flattenDeepRecursive(123)).toEqual([]);
    expect(flattenDeepRecursive('string')).toEqual([]);
    expect(flattenDeepRecursive({})).toEqual([]);
  });
});
