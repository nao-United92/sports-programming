// other/practice/array-flatten-deep-iterative-utils.test.js

const arrayFlattenDeepIterative = require('./array-flatten-deep-iterative-utils');

describe('arrayFlattenDeepIterative', () => {
  test('should flatten a deeply nested array', () => {
    const arr = [1, [2, [3, [4, 5]]], 6, [7, [8]]];
    expect(arrayFlattenDeepIterative(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('should handle a shallow array', () => {
    const arr = [1, 2, 3, 4];
    expect(arrayFlattenDeepIterative(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should handle an empty array', () => {
    expect(arrayFlattenDeepIterative([])).toEqual([]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'hello', [2, { a: 3 }], null, [4, [undefined]]];
    expect(arrayFlattenDeepIterative(arr)).toEqual([1, 'hello', 2, { a: 3 }, null, 4, undefined]);
  });

  test('should handle arrays containing empty nested arrays', () => {
    const arr = [1, [], [2, []], [[[]]], 3];
    expect(arrayFlattenDeepIterative(arr)).toEqual([1, 2, 3]);
  });

  test('should not modify the original array', () => {
    const originalArr = [1, [2, 3], 4];
    arrayFlattenDeepIterative(originalArr);
    expect(originalArr).toEqual([1, [2, 3], 4]);
  });
});