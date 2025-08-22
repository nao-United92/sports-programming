import { chunk } from './chunk-utils';

describe('chunk', () => {
  it('should create chunks of a specified size', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    expect(chunk(array, 2)).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
    expect(chunk(array, 3)).toEqual([['a', 'b', 'c'], ['d', 'e']]);
  });

  it('should return the last chunk with remaining elements', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    expect(chunk(array, 3)[2]).toEqual([7]);
  });

  it('should default to a chunk size of 1', () => {
    const array = ['a', 'b', 'c'];
    expect(chunk(array)).toEqual([['a'], ['b'], ['c']]);
  });

  it('should return an empty array for invalid inputs', () => {
    expect(chunk([], 2)).toEqual([]);
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
    expect(chunk(null, 2)).toEqual([]);
  });
});
