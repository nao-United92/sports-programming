const { deepGet, isPlainObject } = require('./object-helpers');

describe('object-helpers', () => {
  describe('deepGet', () => {
    const testObj = {
      a: {
        b: {
          c: 100,
        },
        d: [1, 2, 3],
      },
      e: null,
    };

    test('should get a deeply nested property', () => {
      expect(deepGet(testObj, 'a.b.c')).toBe(100);
    });

    test('should get a nested array', () => {
      expect(deepGet(testObj, 'a.d')).toEqual([1, 2, 3]);
    });

    test('should return default value for non-existent paths', () => {
      expect(deepGet(testObj, 'a.x.y', 'default')).toBe('default');
    });

    test('should return undefined for non-existent paths without a default value', () => {
      expect(deepGet(testObj, 'a.x.y')).toBeUndefined();
    });

    test('should handle paths with null values', () => {
      expect(deepGet(testObj, 'e.f', 'default')).toBe('default');
    });
    
    test('should return default value for invalid inputs', () => {
      expect(deepGet(null, 'a.b', 'default')).toBe('default');
      expect(deepGet(testObj, 123, 'default')).toBe('default');
    });
  });

  describe('isPlainObject', () => {
    class TestClass {
      constructor() {
        this.a = 1;
      }
    }

    test('should return true for plain objects', () => {
      expect(isPlainObject({})).toBe(true);
      expect(isPlainObject({ a: 1 })).toBe(true);
      expect(isPlainObject(new Object())).toBe(true);
    });

    test('should return false for non-plain objects', () => {
      expect(isPlainObject(new TestClass())).toBe(false);
      expect(isPlainObject([])).toBe(false);
      expect(isPlainObject(new Map())).toBe(false);
      expect(isPlainObject(/abc/)).toBe(false);
      expect(isPlainObject(new Date())).toBe(false);
    });

    test('should return false for primitives and null/undefined', () => {
      expect(isPlainObject('string')).toBe(false);
      expect(isPlainObject(123)).toBe(false);
      expect(isPlainObject(true)).toBe(false);
      expect(isPlainObject(null)).toBe(false);
      expect(isPlainObject(undefined)).toBe(false);
      expect(isPlainObject(Symbol('a'))).toBe(false);
    });
  });
});
