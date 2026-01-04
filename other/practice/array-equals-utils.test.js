const { arrayEquals } = require('./array-equals-utils');

describe('arrayEquals', () => {
  // Test cases for primitive arrays
  test('should return true for identical primitive arrays', () => {
    expect(arrayEquals([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('should return false for primitive arrays with different elements', () => {
    expect(arrayEquals([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  test('should return false for primitive arrays with different order', () => {
    expect(arrayEquals([1, 2, 3], [3, 2, 1])).toBe(false);
  });

  test('should return false for primitive arrays with different lengths', () => {
    expect(arrayEquals([1, 2, 3], [1, 2])).toBe(false);
  });

  test('should return true for identical empty arrays', () => {
    expect(arrayEquals([], [])).toBe(true);
  });

  test('should return false when one array is empty and the other is not', () => {
    expect(arrayEquals([], [1])).toBe(false);
    expect(arrayEquals([1], [])).toBe(false);
  });

  // Test cases for object arrays (deep comparison)
  test('should return true for identical object arrays', () => {
    const arr1 = [{ a: 1 }, { b: 2 }];
    const arr2 = [{ a: 1 }, { b: 2 }];
    expect(arrayEquals(arr1, arr2)).toBe(true);
  });

  test('should return false for object arrays with different property values', () => {
    const arr1 = [{ a: 1 }, { b: 2 }];
    const arr2 = [{ a: 1 }, { b: 3 }];
    expect(arrayEquals(arr1, arr2)).toBe(false);
  });

  test('should return false for object arrays with different property names', () => {
    const arr1 = [{ a: 1 }, { b: 2 }];
    const arr2 = [{ a: 1 }, { c: 2 }];
    expect(arrayEquals(arr1, arr2)).toBe(false);
  });

  test('should return false for object arrays with different order', () => {
    const arr1 = [{ a: 1 }, { b: 2 }];
    const arr2 = [{ b: 2 }, { a: 1 }];
    expect(arrayEquals(arr1, arr2)).toBe(false);
  });

  // Test cases for nested arrays
  test('should return true for identical nested arrays', () => {
    expect(arrayEquals([[1, 2], [3, 4]], [[1, 2], [3, 4]])).toBe(true);
  });

  test('should return false for nested arrays with different inner elements', () => {
    expect(arrayEquals([[1, 2], [3, 4]], [[1, 2], [3, 5]])).toBe(false);
  });

  // Test cases for mixed content
  test('should return true for identical mixed content arrays', () => {
    const arr1 = [1, 'hello', { a: 1, b: [true, false] }, null];
    const arr2 = [1, 'hello', { a: 1, b: [true, false] }, null];
    expect(arrayEquals(arr1, arr2)).toBe(true);
  });

  test('should return false for mixed content arrays with differences', () => {
    const arr1 = [1, 'hello', { a: 1, b: [true, false] }, null];
    const arr2 = [1, 'hello', { a: 1, b: [true, true] }, null];
    expect(arrayEquals(arr1, arr2)).toBe(false);
  });

  test('should return false when comparing an array with a non-array', () => {
    expect(arrayEquals([1, 2], { 0: 1, 1: 2 })).toBe(false);
    expect(arrayEquals([1, 2], 'string')).toBe(false);
    expect(arrayEquals([1, 2], null)).toBe(false);
    expect(arrayEquals(null, [1, 2])).toBe(false);
  });
});