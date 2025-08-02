import { chunk } from './chunk-utils.js';

describe('chunk', () => {
  test('should split an array into chunks of specified size', () => {
    const array = [1, 2, 3, 4, 5, 6];
    expect(chunk(array, 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  test('should handle uneven chunks', () => {
    const array = [1, 2, 3, 4, 5];
    expect(chunk(array, 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('should return an empty array if size is zero or negative', () => {
    const array = [1, 2, 3];
    expect(chunk(array, 0)).toEqual([]);
    expect(chunk(array, -1)).toEqual([]);
  });

  test('should return the original array wrapped in an array if size is larger than array length', () => {
    const array = [1, 2, 3];
    expect(chunk(array, 5)).toEqual([[1, 2, 3]]);
  });

  test('should handle non-array input gracefully', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
    expect(chunk('string', 2)).toEqual([]);
  });
});