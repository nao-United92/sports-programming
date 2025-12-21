const isEqual = require('./object-is-equal-utils');

describe('isEqual', () => {
  test('should return true for identical objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for different objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test('should return false for objects with different keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, c: 2 };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test('should return false for objects with different numbers of keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1 };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for identical arrays', () => {
    const arr1 = [1, 2, [3, 4]];
    const arr2 = [1, 2, [3, 4]];
    expect(isEqual(arr1, arr2)).toBe(true);
  });

  test('should return false for different arrays', () => {
    const arr1 = [1, 2, [3, 4]];
    const arr2 = [1, 2, [3, 5]];
    expect(isEqual(arr1, arr2)).toBe(false);
  });

  test('should return true for two nulls', () => {
    expect(isEqual(null, null)).toBe(true);
  });

  test('should return false for one null', () => {
    expect(isEqual(null, {})).toBe(false);
    expect(isEqual({}, null)).toBe(false);
  });

  test('should handle complex nested objects', () => {
    const obj1 = { a: 1, b: { c: [1, 2], d: { e: 'hello' } } };
    const obj2 = { a: 1, b: { c: [1, 2], d: { e: 'hello' } } };
    const obj3 = { a: 1, b: { c: [1, 2], d: { e: 'world' } } };
    expect(isEqual(obj1, obj2)).toBe(true);
    expect(isEqual(obj1, obj3)).toBe(false);
  });
});