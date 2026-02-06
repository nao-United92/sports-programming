const flattenWithDepth = require('./array-flatten-with-depth-utils');

describe('flattenWithDepth', () => {
  test('should flatten by one level by default', () => {
    const arr = [1, [2, 3], 4, [5, [6, 7]]];
    expect(flattenWithDepth(arr)).toEqual([1, 2, 3, 4, 5, [6, 7]]);
  });

  test('should flatten to a specified depth of 1', () => {
    const arr = [1, [2, 3], 4, [5, [6, 7]]];
    expect(flattenWithDepth(arr, 1)).toEqual([1, 2, 3, 4, 5, [6, 7]]);
  });

  test('should flatten to a specified depth of 2', () => {
    const arr = [1, [2, [3, 4]], 5, [6, [7, [8]]]];
    expect(flattenWithDepth(arr, 2)).toEqual([1, 2, 3, 4, 5, 6, 7, [8]]);
  });

  test('should deeply flatten if depth is sufficiently large', () => {
    const arr = [1, [2, [3, [4, [5]]]], 6];
    expect(flattenWithDepth(arr, Infinity)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(flattenWithDepth(arr, 4)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should return a shallow copy if depth is 0', () => {
    const arr = [1, [2, 3], 4];
    expect(flattenWithDepth(arr, 0)).toEqual([1, [2, 3], 4]);
    expect(flattenWithDepth(arr, 0)).not.toBe(arr); // Should be a new array
  });

  test('should handle empty arrays', () => {
    expect(flattenWithDepth([])).toEqual([]);
    expect(flattenWithDepth([], 5)).toEqual([]);
  });

  test('should handle arrays with no nested elements', () => {
    const arr = [1, 2, 3];
    expect(flattenWithDepth(arr, 2)).toEqual([1, 2, 3]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => flattenWithDepth(null)).toThrow('Expected an array');
    expect(() => flattenWithDepth(123)).toThrow('Expected an array');
  });

  test('should throw an error for invalid depth', () => {
    const arr = [1, 2];
    expect(() => flattenWithDepth(arr, -1)).toThrow('Expected depth to be a non-negative number');
    expect(() => flattenWithDepth(arr, 'abc')).toThrow('Expected depth to be a non-negative number');
  });
});