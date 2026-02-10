import arrayChunkInGroupsOfSize from './array-chunk-in-groups-of-size';

describe('arrayChunkInGroupsOfSize', () => {
  test('should chunk an array into equal parts', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const size = 2;
    expect(arrayChunkInGroupsOfSize(arr, size)).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  test('should handle a remainder chunk', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const size = 3;
    expect(arrayChunkInGroupsOfSize(arr, size)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  test('should return an empty array for an empty input array', () => {
    const arr = [];
    const size = 3;
    expect(arrayChunkInGroupsOfSize(arr, size)).toEqual([]);
  });

  test('should return array of single element arrays if size is 1', () => {
    const arr = [1, 2, 3];
    const size = 1;
    expect(arrayChunkInGroupsOfSize(arr, size)).toEqual([[1], [2], [3]]);
  });

  test('should return a single chunk if size is greater than array length', () => {
    const arr = [1, 2, 3];
    const size = 5;
    expect(arrayChunkInGroupsOfSize(arr, size)).toEqual([[1, 2, 3]]);
  });

  test('should throw an error if size is 0', () => {
    const arr = [1, 2, 3];
    const size = 0;
    expect(() => arrayChunkInGroupsOfSize(arr, size)).toThrow('Chunk size must be greater than 0.');
  });

  test('should throw an error if size is negative', () => {
    const arr = [1, 2, 3];
    const size = -1;
    expect(() => arrayChunkInGroupsOfSize(arr, size)).toThrow('Chunk size must be greater than 0.');
  });
});
