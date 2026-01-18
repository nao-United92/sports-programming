// other/practice/array-compact-falsy-utils.test.js

const arrayCompactFalsy = require('./array-compact-falsy-utils');

describe('arrayCompactFalsy', () => {
  test('should remove all falsy values from an array', () => {
    const arr = [0, 1, false, 2, '', 3, null, 4, undefined, 5, NaN, 'hello'];
    expect(arrayCompactFalsy(arr)).toEqual([1, 2, 3, 4, 5, 'hello']);
  });

  test('should return an empty array if all values are falsy', () => {
    const arr = [0, false, '', null, undefined, NaN];
    expect(arrayCompactFalsy(arr)).toEqual([]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(arrayCompactFalsy([])).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArr = [0, 1, false];
    arrayCompactFalsy(originalArr);
    expect(originalArr).toEqual([0, 1, false]);
  });

  test('should handle arrays with no falsy values', () => {
    const arr = [1, 'hello', true, {}, []];
    expect(arrayCompactFalsy(arr)).toEqual([1, 'hello', true, {}, []]);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(arrayCompactFalsy(null)).toEqual([]);
    expect(arrayCompactFalsy(undefined)).toEqual([]);
    expect(arrayCompactFalsy(123)).toEqual([]);
    expect(arrayCompactFalsy('string')).toEqual([]);
    expect(arrayCompactFalsy({})).toEqual([]);
  });
});