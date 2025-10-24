import { deepEqual } from './object-deep-equal-utils';

describe('deepEqual', () => {
  // Test primitive values
  test('should return true for equal primitive values', () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual('hello', 'hello')).toBe(true);
    expect(deepEqual(true, true)).toBe(true);
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(undefined, undefined)).toBe(true);
  });

  test('should return false for unequal primitive values', () => {
    expect(deepEqual(1, 2)).toBe(false);
    expect(deepEqual('hello', 'world')).toBe(false);
    expect(deepEqual(true, false)).toBe(false);
    expect(deepEqual(null, undefined)).toBe(false);
  });

  test('should handle NaN correctly', () => {
    expect(deepEqual(NaN, NaN)).toBe(true);
    expect(deepEqual(NaN, 1)).toBe(false);
  });

  // Test objects
  test('should return true for equal simple objects', () => {
    expect(deepEqual({ a: 1, b: 'hello' }, { a: 1, b: 'hello' })).toBe(true);
  });

  test('should return false for unequal simple objects', () => {
    expect(deepEqual({ a: 1, b: 'hello' }, { a: 1, b: 'world' })).toBe(false);
    expect(deepEqual({ a: 1, b: 'hello' }, { a: 1, c: 'hello' })).toBe(false);
    expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  test('should return true for equal nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: 'test' } };
    const obj2 = { a: 1, b: { c: 2, d: 'test' } };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for unequal nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: 'test' } };
    const obj2 = { a: 1, b: { c: 3, d: 'test' } };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  // Test arrays
  test('should return true for equal arrays', () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(deepEqual([1, { a: 2 }, 3], [1, { a: 2 }, 3])).toBe(true);
  });

  test('should return false for unequal arrays', () => {
    expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
    expect(deepEqual([1, { a: 2 }, 3], [1, { a: 3 }, 3])).toBe(false);
  });

  // Test mixed types
  test('should return false for different types', () => {
    expect(deepEqual(1, '1')).toBe(false);
    expect(deepEqual({}, [])).toBe(false);
    expect(deepEqual(null, {})).toBe(false);
  });

  // Test Date objects
  test('should return true for equal Date objects', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-01');
    expect(deepEqual(date1, date2)).toBe(true);
  });

  test('should return false for unequal Date objects', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-02');
    expect(deepEqual(date1, date2)).toBe(false);
  });

  // Test RegExp objects
  test('should return true for equal RegExp objects', () => {
    const regex1 = /abc/i;
    const regex2 = /abc/i;
    expect(deepEqual(regex1, regex2)).toBe(true);
  });

  test('should return false for unequal RegExp objects', () => {
    const regex1 = /abc/i;
    const regex2 = /def/i;
    expect(deepEqual(regex1, regex2)).toBe(false);
  });
});