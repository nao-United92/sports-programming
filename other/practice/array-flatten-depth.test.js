import flattenDepth from './array-flatten-depth';

describe('flattenDepth', () => {
  test('should flatten an array to a specified depth', () => {
    const arr = [1, [2, [3, [4]], 5], 6];
    expect(flattenDepth(arr, 1)).toEqual([1, 2, [3, [4]], 5, 6]);
    expect(flattenDepth(arr, 2)).toEqual([1, 2, 3, [4], 5, 6]);
    expect(flattenDepth(arr, 3)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should return the original array if depth is 0', () => {
    const arr = [1, [2, [3]]];
    expect(flattenDepth(arr, 0)).toEqual([1, [2, [3]]]);
  });

  test('should flatten completely if depth is greater than array nesting', () => {
    const arr = [1, [2, [3]]];
    expect(flattenDepth(arr, 10)).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    expect(flattenDepth([], 1)).toEqual([]);
    expect(flattenDepth([[]], 1)).toEqual([]);
    expect(flattenDepth([[], []], 2)).toEqual([]);
  });

  test('should handle arrays with non-array elements', () => {
    const arr = [1, 'a', null, undefined, {
      key: 'value'
    }, 5];
    expect(flattenDepth(arr, 1)).toEqual(arr);
  });

  test('should default to depth 1 if depth is not provided', () => {
    const arr = [1, [2, [3]]];
    expect(flattenDepth(arr)).toEqual([1, 2, [3]]);
  });
});