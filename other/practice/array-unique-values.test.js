import { getUniqueValues } from './array-unique-values.js';

describe('getUniqueValues', () => {
  test('should return unique values from an array of numbers', () => {
    expect(getUniqueValues([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return unique values from an array of strings', () => {
    expect(getUniqueValues(['apple', 'banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry']);
  });

  test('should handle an empty array', () => {
    expect(getUniqueValues([])).toEqual([]);
  });

  test('should handle an array with no duplicate values', () => {
    expect(getUniqueValues([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an array with mixed data types', () => {
    expect(getUniqueValues([1, 'apple', 2, 'apple', 1, 3])).toEqual([1, 'apple', 2, 3]);
  });

  test('should return an empty array if the input is not an array', () => {
    expect(getUniqueValues('not an array')).toEqual([]);
    expect(getUniqueValues(null)).toEqual([]);
    expect(getUniqueValues(undefined)).toEqual([]);
    expect(getUniqueValues({ a: 1 })).toEqual([]);
  });
});