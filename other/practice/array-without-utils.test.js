const without = require('./array-without-utils').default;

describe('without', () => {
  test('should create a new array excluding specified values', () => {
    const arr = [1, 2, 3, 1, 4];
    expect(without(arr, 1, 4)).toEqual([2, 3]);
  });

  test('should handle multiple occurrences of values to exclude', () => {
    const arr = ['a', 'b', 'c', 'a', 'd', 'b'];
    expect(without(arr, 'a', 'b')).toEqual(['c', 'd']);
  });

  test('should return the original array if no values are excluded', () => {
    const arr = [1, 2, 3];
    expect(without(arr, 4, 5)).toEqual([1, 2, 3]);
  });

  test('should return an empty array if all values are excluded', () => {
    const arr = [1, 2, 3];
    expect(without(arr, 1, 2, 3)).toEqual([]);
  });

  test('should handle an empty input array', () => {
    const arr = [];
    expect(without(arr, 1, 2)).toEqual([]);
  });

  test('should handle an empty list of values to exclude', () => {
    const arr = [1, 2, 3];
    expect(without(arr)).toEqual([1, 2, 3]);
  });

  test('should handle mixed data types', () => {
    const arr = [1, '2', true, 1, false, '2', null, undefined];
    expect(without(arr, 1, '2', false)).toEqual([true, null, undefined]);
  });

  test('should return an empty array if the input is not an array', () => {
    expect(without(null, 1)).toEqual([]);
    expect(without(undefined, 1)).toEqual([]);
    expect(without('string', 's')).toEqual([]);
    expect(without({}, 1)).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArray = [1, 2, 3];
    without(originalArray, 1);
    expect(originalArray).toEqual([1, 2, 3]);
  });
});