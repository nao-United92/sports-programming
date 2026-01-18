// other/practice/array-flatten-with-depth-utils.test.js

const arrayFlattenWithDepth = require('./array-flatten-with-depth-utils');

describe('arrayFlattenWithDepth', () => {
  test('should flatten an array by one level by default', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(arrayFlattenWithDepth(arr)).toEqual([1, 2, [3, 4], 5]);
  });

  test('should flatten an array to a specified depth', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(arrayFlattenWithDepth(arr, 2)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should not flatten if depth is 0', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(arrayFlattenWithDepth(arr, 0)).toEqual([1, [2, [3, 4]], 5]);
  });

  test('should handle empty arrays', () => {
    expect(arrayFlattenWithDepth([])).toEqual([]);
    expect(arrayFlattenWithDepth([], 2)).toEqual([]);
  });

  test('should handle arrays with no nested arrays', () => {
    const arr = [1, 2, 3, 4];
    expect(arrayFlattenWithDepth(arr)).toEqual([1, 2, 3, 4]);
    expect(arrayFlattenWithDepth(arr, 2)).toEqual([1, 2, 3, 4]);
  });

  test('should flatten deeply nested arrays', () => {
    const arr = [1, [2, [3, [4, 5]]], 6];
    expect(arrayFlattenWithDepth(arr, Infinity)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, [2, { a: 3 }], 'hello', [4, [5]]];
    expect(arrayFlattenWithDepth(arr, 1)).toEqual([1, 2, { a: 3 }, 'hello', 4, [5]]);
    expect(arrayFlattenWithDepth(arr, 2)).toEqual([1, 2, { a: 3 }, 'hello', 4, 5]);
  });
});
