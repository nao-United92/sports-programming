// other/practice/array-initial-utils.test.js

const arrayInitial = require('./array-initial-utils');

describe('arrayInitial', () => {
  test('should return all but the last element of an array', () => {
    expect(arrayInitial([1, 2, 3, 4])).toEqual([1, 2, 3]);
  });

  test('should return an empty array if the input array has one element', () => {
    expect(arrayInitial([1])).toEqual([]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(arrayInitial([])).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArr = [1, 2, 3];
    arrayInitial(originalArr);
    expect(originalArr).toEqual([1, 2, 3]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'hello', { a: 1 }, null];
    expect(arrayInitial(arr)).toEqual([1, 'hello', { a: 1 }]);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(arrayInitial(null)).toEqual([]);
    expect(arrayInitial(undefined)).toEqual([]);
    expect(arrayInitial(123)).toEqual([]);
    expect(arrayInitial('string')).toEqual([]);
    expect(arrayInitial({})).toEqual([]);
  });
});