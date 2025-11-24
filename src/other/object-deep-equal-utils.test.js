const { isDeepEqual } = require('./object-deep-equal-utils');

describe('isDeepEqual', () => {
  test('should return true for equal primitive values', () => {
    expect(isDeepEqual(1, 1)).toBe(true);
    expect(isDeepEqual('hello', 'hello')).toBe(true);
    expect(isDeepEqual(true, true)).toBe(true);
    expect(isDeepEqual(null, null)).toBe(true);
    expect(isDeepEqual(undefined, undefined)).toBe(true);
  });

  test('should return false for unequal primitive values', () => {
    expect(isDeepEqual(1, 2)).toBe(false);
    expect(isDeepEqual('hello', 'world')).toBe(false);
    expect(isDeepEqual(true, false)).toBe(false);
    expect(isDeepEqual(null, undefined)).toBe(false);
    expect(isDeepEqual(0, null)).toBe(false);
  });

  test('should return true for equal simple objects', () => {
    expect(isDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
  });

  test('should return false for unequal simple objects', () => {
    expect(isDeepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(isDeepEqual({ a: 1, b: 2 }, { a: 1, c: 2 })).toBe(false);
  });

  test('should return true for equal nested objects', () => {
    const obj1 = { a: 1, b: { c: 3, d: [4, 5] } };
    const obj2 = { a: 1, b: { c: 3, d: [4, 5] } };
    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for unequal nested objects', () => {
    const obj1 = { a: 1, b: { c: 3, d: [4, 5] } };
    const obj2 = { a: 1, b: { c: 3, d: [4, 6] } };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for equal arrays', () => {
    expect(isDeepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isDeepEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }])).toBe(true);
  });

  test('should return false for unequal arrays', () => {
    expect(isDeepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(isDeepEqual([1, 2, 3], [1, 2])).toBe(false);
  });

  test('should handle different types', () => {
    expect(isDeepEqual({ a: 1 }, [1])).toBe(false);
    expect(isDeepEqual({ a: 1 }, null)).toBe(false);
    expect(isDeepEqual([], {})).toBe(false);
  });
});