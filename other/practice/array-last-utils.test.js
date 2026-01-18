// other/practice/array-last-utils.test.js

const arrayLast = require('./array-last-utils');

describe('arrayLast', () => {
  test('should return the last element of an array', () => {
    expect(arrayLast([1, 2, 3, 4])).toBe(4);
  });

  test('should return undefined for an empty array', () => {
    expect(arrayLast([])).toBeUndefined();
  });

  test('should return the single element for a single-element array', () => {
    expect(arrayLast([10])).toBe(10);
  });

  test('should handle arrays with mixed types', () => {
    const obj = { key: 'value' };
    const arr = [1, 'hello', obj, null];
    expect(arrayLast(arr)).toBe(null);
    expect(arrayLast([1, 'hello', obj])).toBe(obj);
  });

  test('should handle non-array input by returning undefined', () => {
    expect(arrayLast(null)).toBeUndefined();
    expect(arrayLast(undefined)).toBeUndefined();
    expect(arrayLast(123)).toBeUndefined();
    expect(arrayLast('string')).toBeUndefined();
    expect(arrayLast({})).toBeUndefined();
  });
});
