// src/other/object-utility-functions-advanced.test.js

const { mergeDeep } = require('./object-utility-functions-advanced');

describe('Object Utility Functions Advanced', () => {
  describe('mergeDeep', () => {
    test('should deeply merge two simple objects', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { b: { d: 3 }, e: 4 };
      const expected = { a: 1, b: { c: 2, d: 3 }, e: 4 };
      expect(mergeDeep(obj1, obj2)).toEqual(expected);
    });

    test('should deeply merge multiple objects', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { b: { d: 3 }, e: 4 };
      const obj3 = { f: { g: 5 } };
      const expected = { a: 1, b: { c: 2, d: 3 }, e: 4, f: { g: 5 } };
      expect(mergeDeep(obj1, obj2, obj3)).toEqual(expected);
    });

    test('should overwrite properties with later sources', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { a: 5, b: { c: 10, d: 3 } };
      const expected = { a: 5, b: { c: 10, d: 3 } };
      expect(mergeDeep(obj1, obj2)).toEqual(expected);
    });

    test('should handle arrays by overwriting them', () => {
      const obj1 = { a: 1, arr: [1, 2] };
      const obj2 = { arr: [3, 4] };
      const expected = { a: 1, arr: [3, 4] };
      expect(mergeDeep(obj1, obj2)).toEqual(expected);
    });

    test('should handle nested arrays by overwriting them', () => {
      const obj1 = { a: 1, nested: { arr: [1, 2] } };
      const obj2 = { nested: { arr: [3, 4] } };
      const expected = { a: 1, nested: { arr: [3, 4] } };
      expect(mergeDeep(obj1, obj2)).toEqual(expected);
    });

    test('should handle null and undefined values gracefully', () => {
      const obj1 = { a: 1, b: null };
      const obj2 = { b: { c: 2 }, d: undefined };
      const expected = { a: 1, b: { c: 2 }, d: undefined };
      expect(mergeDeep(obj1, obj2)).toEqual(expected);
    });

    test('should return the target object if no sources are provided', () => {
      const obj = { a: 1 };
      expect(mergeDeep(obj)).toEqual({ a: 1 });
    });

    test('should handle non-object target gracefully', () => {
      expect(mergeDeep(null, { a: 1 })).toBeNull();
      expect(mergeDeep(123, { a: 1 })).toBe(123);
    });

    test('should handle non-object sources gracefully', () => {
      const obj1 = { a: 1 };
      const obj2 = null;
      const obj3 = { b: 2 };
      const expected = { a: 1, b: 2 };
      expect(mergeDeep(obj1, obj2, obj3)).toEqual(expected);
    });
  });
});
