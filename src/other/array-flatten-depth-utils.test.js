import { flattenDepth } from './array-flatten-depth-utils';

describe('flattenDepth', () => {
  const array = [1, [2, [3, [4]], 5]];

  it('should flatten an array to a specified depth', () => {
    expect(flattenDepth(array, 1)).toEqual([1, 2, [3, [4]], 5]);
    expect(flattenDepth(array, 2)).toEqual([1, 2, 3, [4], 5]);
    expect(flattenDepth(array, 3)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should flatten one level deep by default', () => {
    expect(flattenDepth(array)).toEqual([1, 2, [3, [4]], 5]);
  });

  it('should return the original array if depth is 0', () => {
    expect(flattenDepth(array, 0)).toEqual(array);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(flattenDepth(null, 1)).toEqual([]);
    expect(flattenDepth(undefined, 1)).toEqual([]);
    expect(flattenDepth('string', 1)).toEqual([]);
  });

  it('should handle empty arrays', () => {
    expect(flattenDepth([], 1)).toEqual([]);
  });

  it('should handle depth less than 0', () => {
    expect(flattenDepth(array, -1)).toEqual([]);
  });
});