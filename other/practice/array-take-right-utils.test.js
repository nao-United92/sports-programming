const arrayTakeRight = require('./array-take-right-utils');

describe('arrayTakeRight', () => {
  test('should take the last n elements from an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayTakeRight(arr, 2)).toEqual([4, 5]);
  });

  test('should take the last element by default (n=1)', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayTakeRight(arr)).toEqual([5]);
  });

  test('should return an empty array if n is 0', () => {
    const arr = [1, 2, 3];
    expect(arrayTakeRight(arr, 0)).toEqual([]);
  });

  test('should return the entire array if n is greater than or equal to array length', () => {
    const arr = [1, 2, 3];
    expect(arrayTakeRight(arr, 5)).toEqual([1, 2, 3]);
    expect(arrayTakeRight(arr, 3)).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    const arr = [];
    expect(arrayTakeRight(arr, 2)).toEqual([]);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    arrayTakeRight(arr, 1);
    expect(arr).toEqual(originalArr);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', null, { key: 'value' }, undefined];
    expect(arrayTakeRight(arr, 2)).toEqual([{ key: 'value' }, undefined]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayTakeRight(null, 1)).toThrow('Expected an array for the first argument.');
    expect(() => arrayTakeRight(123, 1)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if n is not a non-negative integer', () => {
    expect(() => arrayTakeRight([1, 2], -1)).toThrow('Expected n to be a non-negative integer.');
    expect(() => arrayTakeRight([1, 2], 1.5)).toThrow('Expected n to be a non-negative integer.');
    expect(() => arrayTakeRight([1, 2], 'abc')).toThrow('Expected n to be a non-negative integer.');
  });
});