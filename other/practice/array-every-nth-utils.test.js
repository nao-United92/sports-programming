const arrayEveryNth = require('./array-every-nth-utils');

describe('arrayEveryNth', () => {
  test('should return every second element from an array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(arrayEveryNth(arr, 2)).toEqual([1, 3, 5, 7]);
  });

  test('should return every third element from an array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(arrayEveryNth(arr, 3)).toEqual([1, 4, 7]);
  });

  test('should return elements with an offset', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(arrayEveryNth(arr, 2, 1)).toEqual([2, 4, 6, 8]); // starting from index 1
  });

  test('should return the original array if nth is 1', () => {
    const arr = [1, 2, 3];
    expect(arrayEveryNth(arr, 1)).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    const arr = [];
    expect(arrayEveryNth(arr, 2)).toEqual([]);
  });

  test('should handle arrays where nth is larger than array length', () => {
    const arr = [1, 2, 3];
    expect(arrayEveryNth(arr, 5)).toEqual([1]);
  });

  test('should return an empty array if offset is out of bounds', () => {
    const arr = [1, 2, 3];
    expect(arrayEveryNth(arr, 1, 5)).toEqual([]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayEveryNth(null, 2)).toThrow('Expected an array for the first argument.');
    expect(() => arrayEveryNth(123, 2)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if nth is not a positive integer', () => {
    expect(() => arrayEveryNth([1, 2], 0)).toThrow('Expected nth to be a positive integer.');
    expect(() => arrayEveryNth([1, 2], -1)).toThrow('Expected nth to be a positive integer.');
    expect(() => arrayEveryNth([1, 2], 1.5)).toThrow('Expected nth to be a positive integer.');
    expect(() => arrayEveryNth([1, 2], 'abc')).toThrow('Expected nth to be a positive integer.');
  });

  test('should throw an error if offset is not a non-negative integer', () => {
    expect(() => arrayEveryNth([1, 2], 2, -1)).toThrow('Expected offset to be a non-negative integer.');
    expect(() => arrayEveryNth([1, 2], 2, 1.5)).toThrow('Expected offset to be a non-negative integer.');
    expect(() => arrayEveryNth([1, 2], 2, 'abc')).toThrow('Expected offset to be a non-negative integer.');
  });
});
