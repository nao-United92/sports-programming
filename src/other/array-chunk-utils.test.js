const { chunk, chunkArrayInGroups } = require('./array-chunk-utils.js');

describe('chunk', () => {
  it('should create chunks of a specified size', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(chunk(array, 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  it('should create a final chunk with remaining elements', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    expect(chunk(array, 2)).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
  });

  it('should default to a chunk size of 1', () => {
    const array = ['a', 'b', 'c'];
    expect(chunk(array)).toEqual([['a'], ['b'], ['c']]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
    expect(chunk({}, 2)).toEqual([]);
  });

  it('should return an empty array if size is less than 1', () => {
    const array = ['a', 'b', 'c'];
    expect(chunk(array, 0)).toEqual([]);
    expect(chunk(array, -1)).toEqual([]);
  });
});

describe('chunkArrayInGroups', () => {
  it('should chunk an array into smaller arrays of a specified size', () => {
    expect(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  it('should handle uneven chunks correctly', () => {
    expect(chunkArrayInGroups(['a', 'b', 'c', 'd', 'e'], 2)).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(chunkArrayInGroups([], 3)).toEqual([]);
  });

  it('should return an empty array if size is zero or negative', () => {
    expect(chunkArrayInGroups([1, 2, 3], 0)).toEqual([]);
    expect(chunkArrayInGroups([1, 2, 3], -1)).toEqual([]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(chunkArrayInGroups(null, 2)).toEqual([]);
    expect(chunkArrayInGroups(undefined, 2)).toEqual([]);
    expect(chunkArrayInGroups('string', 2)).toEqual([]);
  });

  it('should create single-element chunks if size is 1', () => {
    expect(chunkArrayInGroups([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });
});
