import { flattenNLevel } from './array-flatten-n-level-utils.js';

describe('flattenNLevel', () => {
  it('should flatten an array to a specified depth', () => {
    expect(flattenNLevel([1, [2, [3, [4]]], 5], 2)).toEqual([1, 2, 3, [4], 5]);
  });

  it('should flatten one level by default', () => {
    expect(flattenNLevel([1, [2, [3]], 4])).toEqual([1, 2, [3], 4]);
  });

  it('should fully flatten if depth is Infinity', () => {
    expect(flattenNLevel([1, [2, [3, [4]]], 5], Infinity)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return the original array if depth is 0', () => {
    const arr = [1, [2, [3]], 4];
    expect(flattenNLevel(arr, 0)).toEqual(arr);
  });

  it('should handle an empty array', () => {
    expect(flattenNLevel([], 1)).toEqual([]);
  });

  it('should handle an array with no nested arrays', () => {
    expect(flattenNLevel([1, 2, 3], 2)).toEqual([1, 2, 3]);
  });

  it('should not mutate the original array', () => {
    const arr = [1, [2, [3]]];
    const originalArr = JSON.parse(JSON.stringify(arr)); // Deep copy
    flattenNLevel(arr, 1);
    expect(arr).toEqual(originalArr);
  });
});