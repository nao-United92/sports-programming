// other/practice/array-initial-elements-utils.test.js

const arrayInitialElements = require('./array-initial-elements-utils');

describe('arrayInitialElements', () => {
  test('should return all but the last element by default', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayInitialElements(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should return all but the specified number of last elements', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayInitialElements(arr, 2)).toEqual([1, 2, 3]);
    expect(arrayInitialElements(arr, 0)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return an empty array if n is greater than or equal to array length', () => {
    const arr = [1, 2, 3];
    expect(arrayInitialElements(arr, 3)).toEqual([]);
    expect(arrayInitialElements(arr, 5)).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(arrayInitialElements([])).toEqual([]);
    expect(arrayInitialElements([], 5)).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArr = [1, 2, 3, 4];
    arrayInitialElements(originalArr, 2);
    expect(originalArr).toEqual([1, 2, 3, 4]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'hello', { a: 1 }, null, undefined];
    expect(arrayInitialElements(arr, 2)).toEqual([1, 'hello', { a: 1 }]);
  });

  test('should treat negative n as 0', () => {
    const arr = [1, 2, 3];
    expect(arrayInitialElements(arr, -1)).toEqual([1, 2, 3]);
    expect(arrayInitialElements(arr, -5)).toEqual([1, 2, 3]);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(arrayInitialElements(null)).toEqual([]);
    expect(arrayInitialElements(undefined)).toEqual([]);
    expect(arrayInitialElements(123)).toEqual([]);
    expect(arrayInitialElements('string')).toEqual([]);
    expect(arrayInitialElements({})).toEqual([]);
  });
});
