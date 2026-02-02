const chunk = require('./array-chunk-in-size');

describe('chunk', () => {
  test('should divide an array into chunks of the specified size', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(chunk([], 3)).toEqual([]);
  });

  test('the last chunk should contain the remaining elements', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(chunk(arr, 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('should return an empty array if size is 0 or less', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, 0)).toEqual([]);
    expect(chunk(arr, -1)).toEqual([]);
  });

  test('should create chunks correctly if array length is a multiple of size', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(chunk(arr, 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
  });
});
