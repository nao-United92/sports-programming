const flatten = require('./array-flatten-extended-utils');

describe('flatten', () => {
  test('should flatten an array one level by default', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(flatten(arr)).toEqual([1, 2, [3, 4], 5]);
  });

  test('should flatten an array to a specified depth', () => {
    const arr = [1, [2, [3, 4]], 5, [6, [7]]];
    expect(flatten(arr, 0)).toEqual([1, [2, [3, 4]], 5, [6, [7]]]);
    expect(flatten(arr, 1)).toEqual([1, 2, [3, 4], 5, 6, [7]]);
    expect(flatten(arr, 2)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('should flatten deeply if depth is Infinity', () => {
    const arr = [1, [2, [3, [4, 5]]], 6];
    expect(flatten(arr, Infinity)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should handle empty arrays', () => {
    expect(flatten([])).toEqual([]);
    expect(flatten([], 2)).toEqual([]);
  });

  test('should handle arrays with no nested arrays', () => {
    const arr = [1, 2, 3, 4];
    expect(flatten(arr)).toEqual(arr);
    expect(flatten(arr, Infinity)).toEqual(arr);
  });

  test('should return the original array if not an array', () => {
    expect(flatten(null)).toBeNull();
    expect(flatten(undefined)).toBeUndefined();
    expect(flatten(123)).toBe(123);
    expect(flatten('string')).toBe('string');
    expect(flatten({
      a: 1
    })).toEqual({
      a: 1
    });
  });

  test('should handle negative depth by returning original array', () => {
    const arr = [1, [2, 3]];
    expect(flatten(arr, -1)).toEqual(arr);
    expect(flatten(arr, -Infinity)).toEqual(arr);
  });

  test('should not mutate the original array', () => {
    const arr = [1, [2, 3], 4];
    const originalArr = JSON.parse(JSON.stringify(arr)); // Deep copy for comparison
    flatten(arr);
    expect(arr).toEqual(originalArr);
  });
});
