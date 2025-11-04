
import { flattenDepth } from './array-flatten-depth-utils.js';

describe('flattenDepth', () => {
  const array = [1, [2, [3, [4]], 5]];

  test('should flatten array by a default depth of 1', () => {
    expect(flattenDepth(array)).toEqual([1, 2, [3, [4]], 5]);
  });

  test('should flatten array by a specified depth', () => {
    expect(flattenDepth(array, 2)).toEqual([1, 2, 3, [4], 5]);
  });

  test('should deeply flatten array if depth is large enough', () => {
    expect(flattenDepth(array, 4)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return the original array if depth is 0', () => {
    expect(flattenDepth(array, 0)).toEqual(array);
  });

  test('should return the original array if input is not an array', () => {
    expect(flattenDepth(null, 1)).toBeNull();
    expect(flattenDepth(123, 1)).toBe(123);
  });

  test('should handle empty arrays', () => {
    expect(flattenDepth([], 1)).toEqual([]);
  });
});
