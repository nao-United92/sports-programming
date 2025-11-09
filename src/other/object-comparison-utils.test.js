const { isEqual } = require('./object-comparison-utils');

describe('isEqual', () => {
  // Primitive values
  test('should return true for identical primitive values', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('hello', 'hello')).toBe(true);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
  });

  test('should return false for different primitive values', () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('hello', 'world')).toBe(false);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
  });

  // Objects
  test('should return true for identical empty objects', () => {
    expect(isEqual({}, {})).toBe(true);
  });

  test('should return true for objects with same properties and values', () => {
    const obj1 = { a: 1, b: 'test' };
    const obj2 = { a: 1, b: 'test' };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for objects with different properties', () => {
    const obj1 = { a: 1, b: 'test' };
    const obj2 = { a: 1, c: 'test' };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test('should return false for objects with same properties but different values', () => {
    const obj1 = { a: 1, b: 'test' };
    const obj2 = { a: 1, b: 'different' };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  // Nested Objects
  test('should return true for identical nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: 'nested' } };
    const obj2 = { a: 1, b: { c: 2, d: 'nested' } };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for different nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: 'nested' } };
    const obj2 = { a: 1, b: { c: 2, d: 'different' } };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  // Arrays
  test('should return true for identical empty arrays', () => {
    expect(isEqual([], [])).toBe(true);
  });

  test('should return true for identical arrays of primitives', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('should return false for arrays with different lengths', () => {
    expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
  });

  test('should return false for arrays with different values', () => {
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  // Nested Arrays and Objects
  test('should return true for identical nested arrays and objects', () => {
    const arr1 = [1, { a: 2, b: [3, 4] }, 5];
    const arr2 = [1, { a: 2, b: [3, 4] }, 5];
    expect(isEqual(arr1, arr2)).toBe(true);
  });

  test('should return false for different nested arrays and objects', () => {
    const arr1 = [1, { a: 2, b: [3, 4] }, 5];
    const arr2 = [1, { a: 2, b: [3, 5] }, 5];
    expect(isEqual(arr1, arr2)).toBe(false);
  });

  // Mixed types
  test('should return false for different types', () => {
    expect(isEqual(1, '1')).toBe(false);
    expect(isEqual({}, [])).toBe(false);
    expect(isEqual(null, {})).toBe(false);
    expect(isEqual(undefined, [])).toBe(false);
  });

  // Functions and Symbols (not deeply compared, just reference)
  test('should return true for identical function references', () => {
    const func = () => {};
    expect(isEqual(func, func)).toBe(true);
  });

  test('should return false for different function references', () => {
    expect(isEqual(() => {}, () => {})).toBe(false);
  });
});
