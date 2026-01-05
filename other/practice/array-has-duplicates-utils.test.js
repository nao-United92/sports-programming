const arrayHasDuplicates = require('./array-has-duplicates-utils');

describe('arrayHasDuplicates', () => {
  test('should return true if the array contains duplicates', () => {
    const arr = [1, 2, 3, 2, 4];
    expect(arrayHasDuplicates(arr)).toBe(true);
  });

  test('should return false if the array contains no duplicates', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayHasDuplicates(arr)).toBe(false);
  });

  test('should return false for an empty array', () => {
    const arr = [];
    expect(arrayHasDuplicates(arr)).toBe(false);
  });

  test('should return false for an array with a single element', () => {
    const arr = [1];
    expect(arrayHasDuplicates(arr)).toBe(false);
  });

  test('should handle mixed types including null, undefined, NaN', () => {
    // Set treats NaN as a single unique value, so [NaN, NaN] has duplicates.
    expect(arrayHasDuplicates([1, null, 'a', undefined, NaN, 'a', null, 1])).toBe(true);
    expect(arrayHasDuplicates([NaN, 1, NaN])).toBe(true);
    expect(arrayHasDuplicates([1, 2, NaN])).toBe(false);
  });

  test('should throw TypeError if argument is not an array', () => {
    expect(() => arrayHasDuplicates(null)).toThrow(TypeError);
    expect(() => arrayHasDuplicates(123)).toThrow(TypeError);
    expect(() => arrayHasDuplicates('string')).toThrow(TypeError);
  });
});
