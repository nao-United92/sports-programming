import { deepEqual } from './deep-equal-utils';

describe('deepEqual', () => {
  test('should return true for identical primitive values', () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual('hello', 'hello')).toBe(true);
    expect(deepEqual(true, true)).toBe(true);
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(undefined, undefined)).toBe(true);
  });

  test('should return false for different primitive values', () => {
    expect(deepEqual(1, 2)).toBe(false);
    expect(deepEqual('hello', 'world')).toBe(false);
    expect(deepEqual(true, false)).toBe(false);
    expect(deepEqual(null, undefined)).toBe(false);
  });

  test('should return true for identical simple objects', () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
  });

  test('should return false for different simple objects', () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, c: 2 })).toBe(false);
    expect(deepEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
  });

  test('should return true for identical nested objects', () => {
    const obj1 = { a: 1, b: { c: 3, d: { e: 5 } } };
    const obj2 = { a: 1, b: { c: 3, d: { e: 5 } } };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for different nested objects', () => {
    const obj1 = { a: 1, b: { c: 3, d: { e: 5 } } };
    const obj2 = { a: 1, b: { c: 3, d: { e: 6 } } };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for identical arrays', () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('should return false for different arrays', () => {
    expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(deepEqual([1, 2, 3], [1, 2])).toBe(false);
  });

  test('should return true for identical nested arrays', () => {
    expect(deepEqual([1, [2, 3], 4], [1, [2, 3], 4])).toBe(true);
  });

  test('should return false for different nested arrays', () => {
    expect(deepEqual([1, [2, 3], 4], [1, [2, 4], 4])).toBe(false);
  });

  test('should handle NaN correctly', () => {
    expect(deepEqual(NaN, NaN)).toBe(true);
    expect(deepEqual(NaN, 1)).toBe(false);
  });

  test('should handle mixed types', () => {
    expect(deepEqual({ a: 1 }, [1])).toBe(false);
    expect(deepEqual(1, '1')).toBe(false);
  });
});
