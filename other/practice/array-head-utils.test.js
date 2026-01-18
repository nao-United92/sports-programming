// other/practice/array-head-utils.test.js

const arrayHead = require('./array-head-utils');
const arrayFirst = require('./array-first-utils'); // To ensure it's using the same logic

describe('arrayHead', () => {
  test('should return the first element of an array, same as arrayFirst', () => {
    const arr = [1, 2, 3, 4];
    expect(arrayHead(arr)).toBe(1);
    expect(arrayHead(arr)).toBe(arrayFirst(arr));
  });

  test('should return undefined for an empty array', () => {
    expect(arrayHead([])).toBeUndefined();
  });

  test('should return the single element for a single-element array', () => {
    expect(arrayHead([10])).toBe(10);
  });

  test('should handle arrays with mixed types', () => {
    const obj = { key: 'value' };
    const arr = [obj, 'hello', 1, null];
    expect(arrayHead(arr)).toBe(obj);
  });

  test('should handle non-array input by returning undefined', () => {
    expect(arrayHead(null)).toBeUndefined();
    expect(arrayHead(undefined)).toBeUndefined();
    expect(arrayHead(123)).toBeUndefined();
    expect(arrayHead('string')).toBeUndefined();
    expect(arrayHead({})).toBeUndefined();
  });
});
