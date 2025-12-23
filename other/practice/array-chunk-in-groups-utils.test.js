const chunkInGroups = require('./array-chunk-in-groups-utils');

describe('chunkInGroups', () => {
  test('should chunk an array into specified size', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(chunkInGroups(arr, 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7]
    ]);
  });

  test('should handle a perfect division', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(chunkInGroups(arr, 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6]
    ]);
  });

  test('should return the original array in a single chunk if size is larger than array length', () => {
    const arr = [1, 2, 3];
    expect(chunkInGroups(arr, 5)).toEqual([
      [1, 2, 3]
    ]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(chunkInGroups([], 3)).toEqual([]);
  });

  test('should return an empty array if size is zero or negative', () => {
    const arr = [1, 2, 3];
    expect(chunkInGroups(arr, 0)).toEqual([]);
    expect(chunkInGroups(arr, -1)).toEqual([]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(chunkInGroups(null, 2)).toEqual([]);
    expect(chunkInGroups(undefined, 2)).toEqual([]);
    expect(chunkInGroups(123, 2)).toEqual([]);
    expect(chunkInGroups('string', 2)).toEqual([]);
    expect(chunkInGroups({}, 2)).toEqual([]);
  });

  test('should handle array with single element', () => {
    expect(chunkInGroups([1], 1)).toEqual([
      [1]
    ]);
    expect(chunkInGroups([1], 2)).toEqual([
      [1]
    ]);
  });
});
