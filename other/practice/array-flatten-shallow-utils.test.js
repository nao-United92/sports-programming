// other/practice/array-flatten-shallow-utils.test.js

const arrayFlattenShallow = require('./array-flatten-shallow-utils');

describe('arrayFlattenShallow', () => {
  test('should flatten a nested array by one level', () => {
    const arr = [1, [2, 3], [4, [5, 6]], 7];
    expect(arrayFlattenShallow(arr)).toEqual([1, 2, 3, 4, [5, 6], 7]);
  });

  test('should return the same array if no nesting', () => {
    const arr = [1, 2, 3, 4];
    expect(arrayFlattenShallow(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should handle empty array', () => {
    expect(arrayFlattenShallow([])).toEqual([]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'hello', [2, { a: 3 }], null, [4, undefined]];
    expect(arrayFlattenShallow(arr)).toEqual([1, 'hello', 2, { a: 3 }, null, 4, undefined]);
  });

  test('should handle deeply nested arrays, flattening only one level', () => {
    const arr = [1, [2, [3, [4]]], 5];
    expect(arrayFlattenShallow(arr)).toEqual([1, 2, [3, [4]], 5]);
  });

  test('should handle empty nested arrays', () => {
    const arr = [1, [], [2, []], 3];
    expect(arrayFlattenShallow(arr)).toEqual([1, 2, [], 3]);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(arrayFlattenShallow(null)).toEqual([]);
    expect(arrayFlattenShallow(undefined)).toEqual([]);
    expect(arrayFlattenShallow(123)).toEqual([]);
    expect(arrayFlattenShallow('string')).toEqual([]);
    expect(arrayFlattenShallow({})).toEqual([]);
  });
});
