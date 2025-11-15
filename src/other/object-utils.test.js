const { deepClone, isEmpty, get } = require('./object-utils');

describe('Object Utilities', () => {
  describe('deepClone', () => {
    test('should create a deep clone of an object', () => {
      const original = { a: 1, b: { c: 2, d: [3, 4] }, e: new Date() };
      const clone = deepClone(original);
      expect(clone).toEqual(original);
      expect(clone).not.toBe(original);
      expect(clone.b).not.toBe(original.b);
      expect(clone.b.d).not.toBe(original.b.d);
      expect(clone.e).not.toBe(original.e);
    });

    test('should handle arrays', () => {
        const original = [1, [2, 3], { a: 4 }];
        const clone = deepClone(original);
        expect(clone).toEqual(original);
        expect(clone).not.toBe(original);
        expect(clone[1]).not.toBe(original[1]);
        expect(clone[2]).not.toBe(original[2]);
    });

    test('should handle null and primitive values', () => {
        expect(deepClone(null)).toBeNull();
        expect(deepClone(42)).toBe(42);
        expect(deepClone('hello')).toBe('hello');
    });
  });

  describe('isEmpty', () => {
    test('should return true for empty objects, arrays, and strings', () => {
      expect(isEmpty({})).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty('')).toBe(true);
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    test('should return false for non-empty objects, arrays, and strings', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
      expect(isEmpty([1, 2])).toBe(false);
      expect(isEmpty('text')).toBe(false);
    });
  });

  describe('get', () => {
    const obj = { a: { b: { c: 1, d: [2, 3] } }, e: null };

    test('should get a nested property value using a string path', () => {
      expect(get(obj, 'a.b.c')).toBe(1);
    });

    test('should get a nested property value using an array path', () => {
      expect(get(obj, ['a', 'b', 'c'])).toBe(1);
    });

    test('should get an array element by index in path', () => {
        expect(get(obj, 'a.b.d.1')).toBe(3);
    });

    test('should return a default value for undefined paths', () => {
      expect(get(obj, 'a.x.y', 'default')).toBe('default');
      expect(get(obj, 'f', 123)).toBe(123);
    });

    test('should return undefined if no default value is provided for an undefined path', () => {
      expect(get(obj, 'a.x.y')).toBeUndefined();
    });

    test('should return null for a path that resolves to null', () => {
      expect(get(obj, 'e')).toBeNull();
    });
  });
});