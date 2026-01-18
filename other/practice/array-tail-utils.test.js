// other/practice/array-tail-utils.test.js

const arrayTail = require('./array-tail-utils');

describe('arrayTail', () => {
  test('should return all but the first element of an array', () => {
    expect(arrayTail([1, 2, 3, 4])).toEqual([2, 3, 4]);
  });

  test('should return an empty array if the input array has one element', () => {
    expect(arrayTail([1])).toEqual([]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(arrayTail([])).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArr = [1, 2, 3];
    arrayTail(originalArr);
    expect(originalArr).toEqual([1, 2, 3]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'hello', { a: 1 }, null];
    expect(arrayTail(arr)).toEqual(['hello', { a: 1 }, null]);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(arrayTail(null)).toEqual([]);
    expect(arrayTail(undefined)).toEqual([]);
    expect(arrayTail(123)).toEqual([]);
    expect(arrayTail('string')).toEqual([]);
    expect(arrayTail({})).toEqual([]);
  });
});