import { without } from './array-without-utils.js';

describe('without', () => {
  test('should create an array excluding all given values', () => {
    const array = [1, 2, 3, 1, 4, 2];
    expect(without(array, 1, 2)).toEqual([3, 4]);
  });

  test('should return a new array', () => {
    const array = [1, 2, 3];
    const result = without(array, 1);
    expect(result).toEqual([2, 3]);
    expect(result).not.toBe(array);
  });

  test('should not exclude values not present in the array', () => {
    const array = [1, 2, 3];
    expect(without(array, 4, 5)).toEqual([1, 2, 3]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(without([], 1, 2)).toEqual([]);
  });

  test('should return an empty array if the input is null or undefined', () => {
    expect(without(null, 1)).toEqual([]);
    expect(without(undefined, 1)).toEqual([]);
  });

  test('should handle different types of values', () => {
    const array = [1, 'a', null, undefined, 0, false, 'b'];
    expect(without(array, 'a', null, 0)).toEqual([1, undefined, false, 'b']);
  });
});
