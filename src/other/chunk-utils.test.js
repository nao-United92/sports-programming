
import { chunk } from './chunk-utils.js';

describe('chunk', () => {
  test('should create chunks of a specific size', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(chunk(array, 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test('should create a final chunk with remaining elements', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    expect(chunk(array, 2)).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
  });

  test('should default to a chunk size of 1', () => {
    const array = ['a', 'b', 'c'];
    expect(chunk(array)).toEqual([['a'], ['b'], ['c']]);
  });

  test('should return an empty array if the input is not an array', () => {
    expect(chunk(null)).toEqual([]);
    expect(chunk(undefined)).toEqual([]);
    expect(chunk({})).toEqual([]);
  });

  test('should return an empty array for a size less than 1', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(chunk(array, 0)).toEqual([]);
    expect(chunk(array, -1)).toEqual([]);
  });

  test('should handle an empty array input', () => {
    expect(chunk([], 2)).toEqual([]);
  });
});
