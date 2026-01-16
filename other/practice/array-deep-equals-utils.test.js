const arrayDeepEquals = require('./array-deep-equals-utils');

describe('arrayDeepEquals', () => {
  test('should return true for deeply equal arrays of primitives', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(arrayDeepEquals(arr1, arr2)).toBe(true);
  });

  test('should return false for arrays of primitives with different values', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(arrayDeepEquals(arr1, arr2)).toBe(false);
  });

  test('should return false for arrays of primitives with different lengths', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2];
    expect(arrayDeepEquals(arr1, arr2)).toBe(false);
  });

  test('should return true for deeply equal nested arrays', () => {
    const arr1 = [1, [2, 3], 4];
    const arr2 = [1, [2, 3], 4];
    expect(arrayDeepEquals(arr1, arr2)).toBe(true);
  });

  test('should return false for different nested arrays', () => {
    const arr1 = [1, [2, 3], 4];
    const arr2 = [1, [2, 4], 4];
    expect(arrayDeepEquals(arr1, arr2)).toBe(false);
  });

  test('should return true for deeply equal arrays with objects (shallow comparison of objects using JSON.stringify)', () => {
    const obj1 = { a: 1, b: 'test' };
    const obj2 = { a: 1, b: 'test' };
    const arr1 = [1, obj1, 3];
    const arr2 = [1, obj2, 3];
    expect(arrayDeepEquals(arr1, arr2)).toBe(true);
  });

  test('should return false for arrays with different objects (shallow comparison of objects using JSON.stringify)', () => {
    const obj1 = { a: 1, b: 'test' };
    const obj2 = { a: 1, b: 'different' };
    const arr1 = [1, obj1, 3];
    const arr2 = [1, obj2, 3];
    expect(arrayDeepEquals(arr1, arr2)).toBe(false);
  });

  test('should handle empty arrays', () => {
    expect(arrayDeepEquals([], [])).toBe(true);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayDeepEquals(null, [])).toThrow('Expected both arguments to be arrays.');
    expect(() => arrayDeepEquals(123, [])).toThrow('Expected both arguments to be arrays.');
  });

  test('should throw an error if the second argument is not an array', () => {
    expect(() => arrayDeepEquals([], null)).toThrow('Expected both arguments to be arrays.');
    expect(() => arrayDeepEquals([], 'string')).toThrow('Expected both arguments to be arrays.');
  });
});
