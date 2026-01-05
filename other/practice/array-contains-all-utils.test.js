const arrayContainsAll = require('./array-contains-all-utils');

describe('arrayContainsAll', () => {
  test('should return true if array contains all elements of target array', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = [2, 4];
    expect(arrayContainsAll(arr, target)).toBe(true);
  });

  test('should return false if array does not contain all elements of target array', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = [2, 6];
    expect(arrayContainsAll(arr, target)).toBe(false);
  });

  test('should return true if target array is empty', () => {
    const arr = [1, 2, 3];
    const target = [];
    expect(arrayContainsAll(arr, target)).toBe(true);
  });

  test('should return false if main array is empty and target array is not', () => {
    const arr = [];
    const target = [1, 2];
    expect(arrayContainsAll(arr, target)).toBe(false);
  });

  test('should handle duplicate values in the target array correctly', () => {
    const arr = [1, 2, 3, 2];
    const target = [2, 2];
    // Note: arr.includes(val) will find at least one '2', so this returns true
    // If the intent was to check for *all occurrences*, this would require a different logic.
    // Based on `includes`, this behavior is correct.
    expect(arrayContainsAll(arr, target)).toBe(true);
  });

  test('should handle mixed types', () => {
    const arr = [1, 'a', null, undefined];
    const target = [null, 'a'];
    expect(arrayContainsAll(arr, target)).toBe(true);
  });

  test('should return false for mixed types if not all contained', () => {
    const arr = [1, 'a', null];
    const target = [null, 'b'];
    expect(arrayContainsAll(arr, target)).toBe(false);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayContainsAll(null, [1])).toThrow(TypeError);
    expect(() => arrayContainsAll(123, [1])).toThrow(TypeError);
    expect(() => arrayContainsAll('string', [1])).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not an array', () => {
    expect(() => arrayContainsAll([1], null)).toThrow(TypeError);
    expect(() => arrayContainsAll([1], 123)).toThrow(TypeError);
    expect(() => arrayContainsAll([1], 'string')).toThrow(TypeError);
  });
});
