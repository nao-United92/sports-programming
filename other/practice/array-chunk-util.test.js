import { chunk } from './array-chunk-util';

describe('chunk', () => {
  it('should create an array of elements split into groups the length of size', () => {
    const array = ['a', 'b', 'c', 'd'];
    const chunked = chunk(array, 2);
    expect(chunked).toEqual([['a', 'b'], ['c', 'd']]);
  });

  it('should return the last chunk as remaining elements', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const chunked = chunk(array, 2);
    expect(chunked).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
  });

  it('should return an empty array for an empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it('should return an empty array for non-array values', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

  it('should return an empty array if size is less than or equal to 0', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    expect(chunk(array, 0)).toEqual([]);
    expect(chunk(array, -1)).toEqual([]);
  });
});
