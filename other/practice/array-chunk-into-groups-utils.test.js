import { chunkIntoGroups } from './array-chunk-into-groups-utils.js';

describe('chunkIntoGroups', () => {
  it('should split an array into chunks of a specified size', () => {
    expect(chunkIntoGroups([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should handle an empty array', () => {
    expect(chunkIntoGroups([], 2)).toEqual([]);
  });

  it('should handle a chunk size larger than the array length', () => {
    expect(chunkIntoGroups([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  it('should handle a chunk size equal to the array length', () => {
    expect(chunkIntoGroups([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });

  it('should throw an error for non-positive chunk size', () => {
    expect(() => chunkIntoGroups([1, 2, 3], 0)).toThrow('Chunk size must be a positive number.');
    expect(() => chunkIntoGroups([1, 2, 3], -1)).toThrow('Chunk size must be a positive number.');
  });

  it('should not mutate the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArr = [...arr];
    chunkIntoGroups(arr, 2);
    expect(arr).toEqual(originalArr);
  });
});