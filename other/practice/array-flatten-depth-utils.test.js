const { flattenDepth } = require('./array-flatten-depth-utils');

describe('flattenDepth', () => {
  test('should flatten an array by one level by default', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(flattenDepth(arr)).toEqual([1, 2, [3, 4], 5]);
  });

  test('should flatten an array by the specified depth (depth 1)', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(flattenDepth(arr, 1)).toEqual([1, 2, [3, 4], 5]);
  });

  test('should flatten an array by the specified depth (depth 2)', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(flattenDepth(arr, 2)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return the original array if depth is 0', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(flattenDepth(arr, 0)).toEqual([1, [2, [3, 4]], 5]);
  });

  test('should fully flatten if depth is greater than the maximum nesting level', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(flattenDepth(arr, 10)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    expect(flattenDepth([], 1)).toEqual([]);
  });

  test('should handle an array with no nested arrays', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(flattenDepth(arr, 1)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle arrays with mixed content', () => {
    const arr = [1, [2, 'a'], { key: 'value' }, [true, [false]]];
    expect(flattenDepth(arr, 2)).toEqual([1, 2, 'a', { key: 'value' }, true, false]);
  });

  test('should return the original array if depth is negative', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(flattenDepth(arr, -1)).toEqual(arr); // Should return the original array
  });

  test('should return the original item if not an array', () => {
    expect(flattenDepth(123, 1)).toEqual(123);
    expect(flattenDepth('string', 1)).toEqual('string');
    expect(flattenDepth(null, 1)).toEqual(null);
  });
});