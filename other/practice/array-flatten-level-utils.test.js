const flattenWithDepth = require('./array-flatten-level-utils');

describe('flattenWithDepth', () => {
  test('should flatten array one level deep by default', () => {
    const arr = [1, [2, [3]], 4];
    expect(flattenWithDepth(arr)).toEqual([1, 2, [3], 4]);
  });

  test('should flatten array to a specified depth', () => {
    const arr = [1, [2, [3, [4, 5]]], 6];
    expect(flattenWithDepth(arr, 2)).toEqual([1, 2, 3, [4, 5], 6]);
  });

  test('should flatten array completely if depth is sufficiently large', () => {
    const arr = [1, [2, [3, [4, 5]]], 6];
    expect(flattenWithDepth(arr, Infinity)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(flattenWithDepth(arr, 10)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should return the original array (shallow copy) if depth is 0', () => {
    const arr = [1, [2, 3], 4];
    expect(flattenWithDepth(arr, 0)).toEqual([1, [2, 3], 4]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(flattenWithDepth([], 1)).toEqual([]);
  });

  test('should handle arrays with empty nested arrays', () => {
    const arr = [1, [],
      [2, []],
      [
        []
      ], 3
    ];
    expect(flattenWithDepth(arr, 1)).toEqual([1, 2, [], [], 3]);
    expect(flattenWithDepth(arr, Infinity)).toEqual([1, 2, 3]);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(flattenWithDepth(null, 1)).toEqual([]);
    expect(flattenWithDepth(undefined, 1)).toEqual([]);
    expect(flattenWithDepth(123, 1)).toEqual([]);
    expect(flattenWithDepth('string', 1)).toEqual([]);
    expect(flattenWithDepth({}, 1)).toEqual([]);
  });

  test('should handle negative depth by returning an empty array', () => {
    const arr = [1, [2]];
    expect(flattenWithDepth(arr, -1)).toEqual([]);
  });
});