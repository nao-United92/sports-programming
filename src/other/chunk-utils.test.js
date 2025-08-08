import { chunk } from './chunk-utils';

describe('chunk', () => {
  test('should create chunks of a specific size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const chunked = chunk(array, 3);
    expect(chunked).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
  });

  test('should return an empty array if the input array is empty', () => {
    const array = [];
    const chunked = chunk(array, 3);
    expect(chunked).toEqual([]);
  });

  test('should handle chunk sizes larger than the array length', () => {
    const array = [1, 2, 3];
    const chunked = chunk(array, 5);
    expect(chunked).toEqual([[1, 2, 3]]);
  });
});