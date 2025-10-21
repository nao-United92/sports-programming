import { deepEqual } from './object-deep-equal-utils.js';

describe('deepEqual', () => {
  // Test case 1: Primitive values
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

  // Test case 2: NaN values
  test('should return true for two NaN values', () => {
    expect(deepEqual(NaN, NaN)).toBe(true);
  });

  // Test case 3: Empty objects and arrays
  test('should return true for identical empty objects and arrays', () => {
    expect(deepEqual({}, {})).toBe(true);
    expect(deepEqual([], [])).toBe(true);
  });

  // Test case 4: Simple objects
  test('should return true for identical simple objects', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, b: 'hello' };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for different simple objects', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, b: 'world' };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test('should return false for objects with different keys', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, c: 'hello' };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test('should return false for objects with different number of keys', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1 };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  // Test case 5: Nested objects
  test('should return true for identical nested objects', () => {
    const obj1 = { a: 1, b: { c: 3, d: 'foo' } };
    const obj2 = { a: 1, b: { c: 3, d: 'foo' } };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for different nested objects', () => {
    const obj1 = { a: 1, b: { c: 3, d: 'foo' } };
    const obj2 = { a: 1, b: { c: 3, d: 'bar' } };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  // Test case 6: Arrays
  test('should return true for identical arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(deepEqual(arr1, arr2)).toBe(true);
  });

  test('should return false for different arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(deepEqual(arr1, arr2)).toBe(false);
  });

  test('should return false for arrays with different lengths', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2];
    expect(deepEqual(arr1, arr2)).toBe(false);
  });

  // Test case 7: Nested arrays and objects
  test('should return true for identical nested arrays and objects', () => {
    const data1 = { a: [1, { b: 2 }], c: { d: [3, 4] } };
    const data2 = { a: [1, { b: 2 }], c: { d: [3, 4] } };
    expect(deepEqual(data1, data2)).toBe(true);
  });

  test('should return false for different nested arrays and objects', () => {
    const data1 = { a: [1, { b: 2 }], c: { d: [3, 4] } };
    const data2 = { a: [1, { b: 5 }], c: { d: [3, 4] } };
    expect(deepEqual(data1, data2)).toBe(false);
  });

  // Test case 8: Dates
  test('should return true for identical Date objects', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-01');
    expect(deepEqual(date1, date2)).toBe(true);
  });

  test('should return false for different Date objects', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-02');
    expect(deepEqual(date1, date2)).toBe(false);
  });

  // Test case 9: Regular Expressions
  test('should return true for identical RegExp objects', () => {
    const regex1 = /abc/gi;
    const regex2 = /abc/gi;
    expect(deepEqual(regex1, regex2)).toBe(true);
  });

  test('should return false for different RegExp objects', () => {
    const regex1 = /abc/gi;
    const regex2 = /xyz/gi;
    expect(deepEqual(regex1, regex2)).toBe(false);
    const regex3 = /abc/g;
    const regex4 = /abc/i;
    expect(deepEqual(regex3, regex4)).toBe(false);
  });

  // Test case 10: Maps
  test('should return true for identical Map objects', () => {
    const map1 = new Map([['a', 1], ['b', { c: 2 }]]);
    const map2 = new Map([['a', 1], ['b', { c: 2 }]]);
    expect(deepEqual(map1, map2)).toBe(true);
  });

  test('should return false for different Map objects', () => {
    const map1 = new Map([['a', 1], ['b', { c: 2 }]]);
    const map2 = new Map([['a', 1], ['b', { c: 3 }]]);
    expect(deepEqual(map1, map2)).toBe(false);
  });

  test('should return false for Maps with different sizes', () => {
    const map1 = new Map([['a', 1]]);
    const map2 = new Map([['a', 1], ['b', 2]]);
    expect(deepEqual(map1, map2)).toBe(false);
  });

  // Test case 11: Sets
  test('should return true for identical Set objects', () => {
    const set1 = new Set([1, 2, { a: 3 }]);
    const set2 = new Set([1, 2, { a: 3 }]);
    expect(deepEqual(set1, set2)).toBe(true);
  });

  test('should return false for different Set objects', () => {
    const set1 = new Set([1, 2, { a: 3 }]);
    const set2 = new Set([1, 2, { a: 4 }]);
    expect(deepEqual(set1, set2)).toBe(false);
  });

  test('should return false for Sets with different sizes', () => {
    const set1 = new Set([1, 2]);
    const set2 = new Set([1, 2, 3]);
    expect(deepEqual(set1, set2)).toBe(false);
  });

  // Test case 12: Functions (should be false unless same reference)
  test('should return true for identical function references', () => {
    const func = () => {};
    expect(deepEqual(func, func)).toBe(true);
  });

  test('should return false for different function references', () => {
    const func1 = () => {};
    const func2 = () => {};
    expect(deepEqual(func1, func2)).toBe(false);
  });

  // Test case 13: Mixed types
  test('should return false for mixed types', () => {
    expect(deepEqual({}, [])).toBe(false);
    expect(deepEqual(1, {})).toBe(false);
    expect(deepEqual('1', 1)).toBe(false);
  });
});
