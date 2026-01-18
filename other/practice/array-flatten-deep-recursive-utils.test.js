// other/practice/array-flatten-deep-recursive-utils.test.js

const arrayFlattenDeepRecursive = require('./array-flatten-deep-recursive-utils');

describe('arrayFlattenDeepRecursive', () => {
  test('should flatten a deeply nested array', () => {
    const arr = [1, [2, [3, [4, 5]]], 6, [7, [8]]];
    expect(arrayFlattenDeepRecursive(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('should handle a shallow array', () => {
    const arr = [1, 2, 3, 4];
    expect(arrayFlattenDeepRecursive(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should handle an empty array', () => {
    expect(arrayFlattenDeepRecursive([])).toEqual([]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'hello', [2, { a: 3 }], null, [4, [undefined]]];
    expect(arrayFlattenDeepRecursive(arr)).toEqual([1, 'hello', 2, { a: 3 }, null, 4, undefined]);
  });

  test('should handle arrays containing empty nested arrays', () => {
    const arr = [1, [], [2, []], [[[]]], 3];
    expect(arrayFlattenDeepRecursive(arr)).toEqual([1, 2, 3]);
  });
});