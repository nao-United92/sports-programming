// src/other/object-manipulation-utils.test.js

const { get } = require('./object-manipulation-utils');

describe('Object Manipulation Utils', () => {
  describe('get', () => {
    const testObject = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
      f: [
        { g: 4 },
        { h: 5 },
      ],
      'key-with-dash': 'dashValue',
    };

    test('should retrieve a top-level property', () => {
      expect(get(testObject, 'a')).toBe(1);
    });

    test('should retrieve a nested property using dot notation', () => {
      expect(get(testObject, 'b.c')).toBe(2);
      expect(get(testObject, 'b.d.e')).toBe(3);
    });

    test('should retrieve an array element using bracket notation', () => {
      expect(get(testObject, 'f[0].g')).toBe(4);
      expect(get(testObject, 'f[1].h')).toBe(5);
    });

    test('should return undefined if property does not exist', () => {
      expect(get(testObject, 'b.x')).toBeUndefined();
      expect(get(testObject, 'f[2]')).toBeUndefined();
      expect(get(testObject, 'f[0].x')).toBeUndefined();
    });

    test('should return defaultValue if property does not exist and defaultValue is provided', () => {
      expect(get(testObject, 'b.x', 'default')).toBe('default');
      expect(get(testObject, 'f[2]', null)).toBeNull();
    });

    test('should handle null or undefined intermediate paths', () => {
      const obj = { a: { b: null } };
      expect(get(obj, 'a.b.c')).toBeUndefined();
      expect(get(obj, 'a.b.c', 'default')).toBe('default');
    });

    test('should handle non-object inputs for obj', () => {
      expect(get(null, 'a')).toBeUndefined();
      expect(get(undefined, 'a')).toBeUndefined();
      expect(get(123, 'a')).toBeUndefined();
      expect(get('string', 'a')).toBeUndefined();
    });

    test('should handle non-string or empty path', () => {
      expect(get(testObject, null)).toBeUndefined();
      expect(get(testObject, undefined)).toBeUndefined();
      expect(get(testObject, '')).toBeUndefined();
      expect(get(testObject, 123)).toBeUndefined();
    });

    test('should retrieve property with dash in key', () => {
      expect(get(testObject, 'key-with-dash')).toBe('dashValue');
    });

    test('should retrieve property with dash in key using bracket notation', () => {
      const obj = { 'another-key': { nested: 'value' } };
      expect(get(obj, 'another-key.nested')).toBe('value');
    });
  });
});