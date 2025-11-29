// src/other/object-comparison-utils.test.js

const { deepEqual } = require('./object-comparison-utils');

describe('Object Comparison Utils', () => {
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

    test('should return true for identical shallow objects', () => {
      const obj1 = { a: 1, b: 'test' };
      const obj2 = { a: 1, b: 'test' };
      expect(deepEqual(obj1, obj2)).toBe(true);
    });

    test('should return false for different shallow objects', () => {
      const obj1 = { a: 1, b: 'test' };
      const obj2 = { a: 1, b: 'different' };
      expect(deepEqual(obj1, obj2)).toBe(false);
      const obj3 = { a: 1 };
      const obj4 = { a: 1, b: 2 };
      expect(deepEqual(obj3, obj4)).toBe(false);
    });

    test('should return true for identical nested objects', () => {
      const obj1 = { a: 1, b: { c: 2, d: 'nested' } };
      const obj2 = { a: 1, b: { c: 2, d: 'nested' } };
      expect(deepEqual(obj1, obj2)).toBe(true);
    });

    test('should return false for different nested objects', () => {
      const obj1 = { a: 1, b: { c: 2, d: 'nested' } };
      const obj2 = { a: 1, b: { c: 2, d: 'different' } };
      expect(deepEqual(obj1, obj2)).toBe(false);
    });

    test('should return true for identical arrays', () => {
      expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
      expect(deepEqual(['a', { b: 1 }], ['a', { b: 1 }])).toBe(true);
    });

    test('should return false for different arrays', () => {
      expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
      expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
      expect(deepEqual(['a', { b: 1 }], ['a', { b: 2 }])).toBe(false);
    });

    test('should handle mixed nested structures', () => {
      const val1 = { a: 1, b: [2, { c: 3 }] };
      const val2 = { a: 1, b: [2, { c: 3 }] };
      expect(deepEqual(val1, val2)).toBe(true);

      const val3 = { a: 1, b: [2, { c: 4 }] };
      expect(deepEqual(val1, val3)).toBe(false);
    });

    test('should handle empty objects and arrays', () => {
      expect(deepEqual({}, {})).toBe(true);
      expect(deepEqual([], [])).toBe(true);
      expect(deepEqual({}, [])).toBe(false);
    });

    test('should handle objects with different keys', () => {
      expect(deepEqual({ a: 1 }, { b: 1 })).toBe(false);
    });

    test('should handle objects with undefined properties', () => {
      expect(deepEqual({ a: 1, b: undefined }, { a: 1 })).toBe(false);
      expect(deepEqual({ a: 1, b: undefined }, { a: 1, b: undefined })).toBe(true);
    });

    test('should handle functions (by reference)', () => {
      const func1 = () => {};
      const func2 = () => {};
      expect(deepEqual(func1, func1)).toBe(true);
      expect(deepEqual(func1, func2)).toBe(false);
    });
  });
});