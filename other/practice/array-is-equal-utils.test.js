const isEqual = require('./array-is-equal-utils');

describe('isEqual', () => {
  test('should return true for two identical arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(isEqual(arr1, arr2)).toBe(true);
  });

  test('should return false for arrays with different lengths', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2];
    expect(isEqual(arr1, arr2)).toBe(false);
  });

  test('should return false for arrays with different elements at the same position', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(isEqual(arr1, arr2)).toBe(false);
  });

  test('should return true for two empty arrays', () => {
    expect(isEqual([], [])).toBe(true);
  });

  test('should handle arrays with mixed types', () => {
    expect(isEqual([1, 'a', null], [1, 'a', null])).toBe(true);
    expect(isEqual([1, 'a', null], [1, 'a', undefined])).toBe(false);
  });

  test('should return false for arrays with same elements but different order', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];
    expect(isEqual(arr1, arr2)).toBe(false);
  });

  test('should handle arrays with objects (shallow comparison)', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(isEqual([obj1], [obj1])).toBe(true);
    expect(isEqual([obj1], [obj2])).toBe(false); // Different object references
  });

  test('should throw an error for non-array input for arr1', () => {
    expect(() => isEqual(null, [])).toThrow('Expected both inputs to be arrays');
    expect(() => isEqual(123, [])).toThrow('Expected both inputs to be arrays');
  });

  test('should throw an error for non-array input for arr2', () => {
    expect(() => isEqual([], null)).toThrow('Expected both inputs to be arrays');
    expect(() => isEqual([], 'string')).toThrow('Expected both inputs to be arrays');
  });
});
