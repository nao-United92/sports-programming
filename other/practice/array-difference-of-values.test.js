import { getDifferenceOfValues } from './array-difference-of-values.js';

describe('getDifferenceOfValues', () => {
  test('should return the difference between two arrays of numbers', () => {
    expect(getDifferenceOfValues([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([1, 2]);
  });

  test('should return the difference between two arrays of strings', () => {
    expect(getDifferenceOfValues(['apple', 'banana', 'cherry'], ['banana', 'date'])).toEqual(['apple', 'cherry']);
  });

  test('should return the first array if there is no intersection', () => {
    expect(getDifferenceOfValues([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
  });

  test('should handle an empty first array', () => {
    expect(getDifferenceOfValues([], [1, 2, 3])).toEqual([]);
  });

  test('should handle an empty second array', () => {
    expect(getDifferenceOfValues([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test('should handle two empty arrays', () => {
    expect(getDifferenceOfValues([], [])).toEqual([]);
  });

  test('should handle arrays with duplicate values', () => {
    expect(getDifferenceOfValues([1, 2, 2, 3], [2, 4])).toEqual([1, 3]);
  });

  test('should return the first array if the second argument is not an array', () => {
    expect(getDifferenceOfValues([1, 2, 3], 'not an array')).toEqual([1, 2, 3]);
    expect(getDifferenceOfValues([1, 2, 3], null)).toEqual([1, 2, 3]);
  });

  test('should return an empty array if the first argument is not an array', () => {
    expect(getDifferenceOfValues('not an array', [1, 2, 3])).toEqual([]);
  });
});
