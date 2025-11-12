const { deepGet, mapValues, invert, isEqual } = require('./object-enhancements.js');

describe('Object Enhancements', () => {
  describe('deepGet', () => {
    const obj = { a: { b: { c: 1 } }, d: [{ e: 2 }] };

    test('should get a nested property value', () => {
      expect(deepGet(obj, 'a.b.c')).toBe(1);
    });

    test('should get a nested property value with array path', () => {
      expect(deepGet(obj, ['a', 'b', 'c'])).toBe(1);
    });

    test('should get a nested property value within an array', () => {
      expect(deepGet(obj, 'd[0].e')).toBe(2);
    });

    test('should return default value for non-existent path', () => {
      expect(deepGet(obj, 'a.b.f', 'default')).toBe('default');
    });

    test('should return undefined for non-existent path without default value', () => {
      expect(deepGet(obj, 'x.y.z')).toBeUndefined();
    });
  });

  describe('mapValues', () => {
    const obj = { a: 1, b: 2, c: 3 };

    test('should apply a function to each value', () => {
      const double = (n) => n * 2;
      expect(mapValues(obj, double)).toEqual({ a: 2, b: 4, c: 6 });
    });

    test('should pass key and object to the function', () => {
      const fn = (val, key, o) => `${key}-${val * Object.keys(o).length}`;
      expect(mapValues(obj, fn)).toEqual({ a: 'a-3', b: 'b-6', c: 'c-9' });
    });
  });

  describe('invert', () => {
    const obj = { a: '1', b: '2', c: '3' };

    test('should invert keys and values', () => {
      expect(invert(obj)).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
    });

    test('should handle objects with non-unique values (last one wins)', () => {
      const objWithDuplicates = { a: '1', b: '2', c: '1' };
      expect(invert(objWithDuplicates)).toEqual({ '1': 'c', '2': 'b' });
    });
  });

  describe('isEqual', () => {
    test('should return true for equal primitives', () => {
      expect(isEqual(1, 1)).toBe(true);
      expect(isEqual('a', 'a')).toBe(true);
      expect(isEqual(true, true)).toBe(true);
    });

    test('should return false for unequal primitives', () => {
      expect(isEqual(1, 2)).toBe(false);
      expect(isEqual('a', 'b')).toBe(false);
      expect(isEqual(true, false)).toBe(false);
    });

    test('should return true for equal objects', () => {
      expect(isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })).toBe(true);
    });

    test('should return false for unequal objects', () => {
      expect(isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })).toBe(false);
      expect(isEqual({ a: 1, b: { c: 2 } }, { a: 1, d: { c: 2 } })).toBe(false);
    });

    test('should return true for equal arrays', () => {
      expect(isEqual([1, [2, 3]], [1, [2, 3]])).toBe(true);
    });

    test('should return false for unequal arrays', () => {
      expect(isEqual([1, [2, 3]], [1, [2, 4]])).toBe(false);
      expect(isEqual([1, [2, 3]], [1, 2, 3])).toBe(false);
    });

    test('should handle null and undefined', () => {
      expect(isEqual(null, null)).toBe(true);
      expect(isEqual(undefined, undefined)).toBe(true);
      expect(isEqual(null, undefined)).toBe(false);
      expect(isEqual({ a: null }, { a: null })).toBe(true);
      expect(isEqual({ a: undefined }, { a: undefined })).toBe(true);
    });
  });
});