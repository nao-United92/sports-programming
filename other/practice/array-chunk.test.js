import { chunk } from './array-chunk';

describe('chunk', () => {
  test('should split an array into chunks of specified size', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(chunk(arr, 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('should return an empty array if input array is empty', () => {
    const arr = [];
    expect(chunk(arr, 2)).toEqual([]);
  });

  test('should return array of single-element arrays if size is 1', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, 1)).toEqual([[1], [2], [3]]);
  });

  test('should return the original array as a single chunk if size is larger than array length', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, 5)).toEqual([[1, 2, 3]]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', true, null, undefined];
    expect(chunk(arr, 2)).toEqual([[1, 'a'], [true, null], [undefined]]);
  });

  test('should handle size of 0 by returning an empty array', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, 0)).toEqual([]);
  });

  test('should handle negative size by returning an empty array', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, -1)).toEqual([]);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
    expect(chunk('string', 2)).toEqual([]);
  });

  test('should handle float size by flooring it', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(chunk(arr, 2.5)).toEqual([[1, 2], [3, 4], [5]]); // size becomes 2
  });
});
