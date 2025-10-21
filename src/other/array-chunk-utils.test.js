const { chunk } = require('./array-chunk-utils.js');

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
