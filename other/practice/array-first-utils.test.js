// other/practice/array-first-utils.test.js

const arrayFirst = require('./array-first-utils');

describe('arrayFirst', () => {
  test('should return the first element of an array', () => {
    expect(arrayFirst([1, 2, 3, 4])).toBe(1);
  });

  test('should return undefined for an empty array', () => {
    expect(arrayFirst([])).toBeUndefined();
  });

  test('should return the single element for a single-element array', () => {
    expect(arrayFirst([10])).toBe(10);
  });

  test('should handle arrays with mixed types', () => {
    const obj = { key: 'value' };
    const arr = [obj, 'hello', 1, null];
    expect(arrayFirst(arr)).toBe(obj);
  });

  test('should handle non-array input by returning undefined', () => {
    expect(arrayFirst(null)).toBeUndefined();
    expect(arrayFirst(undefined)).toBeUndefined();
    expect(arrayFirst(123)).toBeUndefined();
    expect(arrayFirst('string')).toBeUndefined();
    expect(arrayFirst({})).toBeUndefined();
  });
});
