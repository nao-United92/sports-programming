// other/practice/array-last-elements-utils.test.js

const arrayLastElements = require('./array-last-elements-utils');

describe('arrayLastElements', () => {
  test('should return the last element by default', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayLastElements(arr)).toEqual([5]);
  });

  test('should return the specified number of last elements', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayLastElements(arr, 2)).toEqual([4, 5]);
    expect(arrayLastElements(arr, 0)).toEqual([]);
  });

  test('should return all elements if n is greater than or equal to array length', () => {
    const arr = [1, 2, 3];
    expect(arrayLastElements(arr, 3)).toEqual([1, 2, 3]);
    expect(arrayLastElements(arr, 5)).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    expect(arrayLastElements([])).toEqual([]);
    expect(arrayLastElements([], 5)).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArr = [1, 2, 3, 4];
    arrayLastElements(originalArr, 2);
    expect(originalArr).toEqual([1, 2, 3, 4]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'hello', { a: 1 }, null, undefined];
    expect(arrayLastElements(arr, 2)).toEqual([null, undefined]);
  });

  test('should treat negative n as 0', () => {
    const arr = [1, 2, 3];
    expect(arrayLastElements(arr, -1)).toEqual([]);
    expect(arrayLastElements(arr, -5)).toEqual([]);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(arrayLastElements(null)).toEqual([]);
    expect(arrayLastElements(undefined)).toEqual([]);
    expect(arrayLastElements(123)).toEqual([]);
    expect(arrayLastElements('string')).toEqual([]);
    expect(arrayLastElements({})).toEqual([]);
  });
});
