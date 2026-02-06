const uniqueValues = require('./array-unique-values-utils');

describe('uniqueValues', () => {
  test('should return unique values from an array of numbers', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(uniqueValues(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return unique values from an array of strings', () => {
    const arr = ['a', 'b', 'a', 'c', 'b'];
    expect(uniqueValues(arr)).toEqual(['a', 'b', 'c']);
  });

  test('should return unique values from an array of mixed types', () => {
    const arr = [1, 'a', 1, null, 'a', undefined, null];
    expect(uniqueValues(arr)).toEqual([1, 'a', null, undefined]);
  });

  test('should handle empty array', () => {
    expect(uniqueValues([])).toEqual([]);
  });

  test('should handle array with all unique values', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(uniqueValues(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => uniqueValues(null)).toThrow('Expected an array');
    expect(() => uniqueValues(123)).toThrow('Expected an array');
    expect(() => uniqueValues('string')).toThrow('Expected an array');
    expect(() => uniqueValues({})).toThrow('Expected an array');
  });
});