const flattenDepth = require('./array-flatten-depth-utils');

describe('flattenDepth', () => {
  it('should flatten an array up to a specified depth', () => {
    const arr = [1, [2, [3, [4]], 5]];
    expect(flattenDepth(arr, 1)).toEqual([1, 2, [3, [4]], 5]);
    expect(flattenDepth(arr, 2)).toEqual([1, 2, 3, [4], 5]);
    expect(flattenDepth(arr, 3)).toEqual([1, 2, 3, 4, 5]);
    expect(flattenDepth(arr, 4)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should default to a depth of 1', () => {
    const arr = [1, [2, [3, [4]], 5]];
    expect(flattenDepth(arr)).toEqual([1, 2, [3, [4]], 5]);
  });

  it('should return a new array if depth is 0 or less', () => {
    const arr = [1, [2]];
    const result = flattenDepth(arr, 0);
    expect(result).toEqual(arr);
    expect(result).not.toBe(arr);
  });

  it('should handle empty arrays', () => {
    expect(flattenDepth([[]])).toEqual([]);
    expect(flattenDepth([1, [], [[]]])).toEqual([1, []]);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(flattenDepth(null)).toEqual([]);
    expect(flattenDepth(undefined)).toEqual([]);
  });

  it('should handle arrays with non-array elements mixed with arrays', () => {
    const arr = [1, [2, 3], 4, [5]];
    expect(flattenDepth(arr, 1)).toEqual([1, 2, 3, 4, 5]);
  });
});
