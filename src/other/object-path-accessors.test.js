const { deepGet, deepSet } = require('./object-path-accessors');

describe('Object Path Accessors', () => {
  describe('deepGet', () => {
    const obj = { a: { b: { c: 100 }, d: [{ val: 'item1' }] }, e: null };

    test('should get a deeply nested property using dot notation', () => {
      expect(deepGet(obj, 'a.b.c')).toBe(100);
    });

    test('should get a deeply nested property using bracket notation', () => {
      expect(deepGet(obj, 'a.d[0].val')).toBe('item1');
    });

    test('should return default value for non-existent path', () => {
      expect(deepGet(obj, 'a.x.y', 'default')).toBe('default');
    });

    test('should return undefined for non-existent path without default value', () => {
      expect(deepGet(obj, 'a.x.y')).toBeUndefined();
    });

    test('should handle null values in path gracefully', () => {
      expect(deepGet(obj, 'e.f', 'default')).toBe('default');
    });

    test('should work with an array path', () => {
        expect(deepGet(obj, ['a', 'd', '0', 'val'])).toBe('item1');
    });
  });

  describe('deepSet', () => {
    test('should set a deeply nested property', () => {
      const obj = {};
      deepSet(obj, 'a.b.c', 200);
      expect(obj.a.b.c).toBe(200);
    });

    test('should create nested arrays for numeric keys', () => {
      const obj = {};
      deepSet(obj, 'a[0].b', 300);
      expect(Array.isArray(obj.a)).toBe(true);
      expect(obj.a[0].b).toBe(300);
    });

    test('should update an existing property', () => {
      const obj = { a: { b: 1 } };
      deepSet(obj, 'a.b', 2);
      expect(obj.a.b).toBe(2);
    });

    test('should not overwrite existing objects unless necessary', () => {
        const existingSubObject = { x: 1 };
        const obj = { a: existingSubObject };
        deepSet(obj, 'a.y', 2);
        expect(obj.a.x).toBe(1);
        expect(obj.a.y).toBe(2);
        expect(obj.a).toBe(existingSubObject);
    });

    test('should work with an array path', () => {
        const obj = {};
        deepSet(obj, ['a', '0', 'b'], 'value');
        expect(obj.a[0].b).toBe('value');
    });
  });
});
