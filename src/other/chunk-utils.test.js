import { chunk } from './chunk-utils';

describe('chunk', () => {
  test('should split an array into chunks of specified size', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  test('should handle a remainder chunk', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });

  test('should return an empty array if input array is empty', () => {
    const arr = [];
    expect(chunk(arr, 3)).toEqual([]);
  });

  test('should return the original array as a single chunk if size is larger than array length', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, 5)).toEqual([[1, 2, 3]]);
  });

  test('should return an empty array if size is 0', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, 0)).toEqual([]);
  });

  test('should return an empty array if size is negative', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, -1)).toEqual([]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(chunk(null, 3)).toEqual([]);
    expect(chunk(undefined, 3)).toEqual([]);
    expect(chunk('string', 3)).toEqual([]);
    expect(chunk(123, 3)).toEqual([]);
    expect(chunk({}, 3)).toEqual([]);
  });

  test('should handle array with single element', () => {
    const arr = [1];
    expect(chunk(arr, 1)).toEqual([[1]]);
  });
});
