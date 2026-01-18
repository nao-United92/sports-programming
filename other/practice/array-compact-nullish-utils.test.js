// other/practice/array-compact-nullish-utils.test.js

const arrayCompactNullish = require('./array-compact-nullish-utils');

describe('arrayCompactNullish', () => {
  test('should remove null and undefined values from an array', () => {
    const arr = [1, null, 2, undefined, 3, null, 4];
    expect(arrayCompactNullish(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should return an empty array if all values are nullish', () => {
    const arr = [null, undefined, null];
    expect(arrayCompactNullish(arr)).toEqual([]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(arrayCompactNullish([])).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArr = [1, null, 2];
    arrayCompactNullish(originalArr);
    expect(originalArr).toEqual([1, null, 2]);
  });

  test('should handle arrays with no nullish values', () => {
    const arr = [1, 2, 3, 'hello', true];
    expect(arrayCompactNullish(arr)).toEqual([1, 2, 3, 'hello', true]);
  });

  test('should handle arrays with other falsy values (0, false, "")', () => {
    const arr = [1, 0, null, false, undefined, '', 5];
    expect(arrayCompactNullish(arr)).toEqual([1, 0, false, '', 5]);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(arrayCompactNullish(null)).toEqual([]);
    expect(arrayCompactNullish(undefined)).toEqual([]);
    expect(arrayCompactNullish(123)).toEqual([]);
    expect(arrayCompactNullish('string')).toEqual([]);
    expect(arrayCompactNullish({})).toEqual([]);
  });
});