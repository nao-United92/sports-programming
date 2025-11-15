import { deepClone, get, set } from './object-utils';

describe('object-utils', () => {
  describe('deepClone', () => {
    test('should deep clone a simple object', () => {
      const obj = { a: 1, b: { c: 2 } };
      const clone = deepClone(obj);
      expect(clone).toEqual(obj);
      expect(clone).not.toBe(obj);
      expect(clone.b).not.toBe(obj.b);
    });

    test('should deep clone an array', () => {
      const arr = [1, [2, 3]];
      const clone = deepClone(arr);
      expect(clone).toEqual(arr);
      expect(clone).not.toBe(arr);
      expect(clone[1]).not.toBe(arr[1]);
    });

    test('should handle null and primitives', () => {
      expect(deepClone(null)).toBeNull();
      expect(deepClone(42)).toBe(42);
      expect(deepClone('hello')).toBe('hello');
    });

    test('should handle dates', () => {
        const date = new Date();
        const clone = deepClone({ d: date });
        expect(clone.d.getTime()).toBe(date.getTime());
        expect(clone.d).not.toBe(date);
    });
  });

  describe('get', () => {
    const obj = { a: { b: { c: 1 } }, d: [2, { e: 3 }] };

    test('should get a value using a string path', () => {
      expect(get(obj, 'a.b.c')).toBe(1);
    });

    test('should get a value using an array path', () => {
      expect(get(obj, ['a', 'b', 'c'])).toBe(1);
    });

    test('should get a value from an array using dot notation index', () => {
      expect(get(obj, 'd.1.e')).toBe(3);
    });

    test('should return a default value for a non-existent path', () => {
      expect(get(obj, 'a.b.x', 'default')).toBe('default');
    });

    test('should return undefined for a non-existent path without a default value', () => {
      expect(get(obj, 'a.b.x')).toBeUndefined();
    });
  });

  describe('set', () => {
    test('should set a value on a new path', () => {
      const obj = { a: {} };
      set(obj, 'a.b.c', 1);
      expect(obj.a.b.c).toBe(1);
    });

    test('should set a value on an existing path', () => {
      const obj = { a: { b: { c: 1 } } };
      set(obj, 'a.b.c', 2);
      expect(obj.a.b.c).toBe(2);
    });

    test('should create nested objects if they do not exist', () => {
      const obj = {};
      set(obj, 'x.y.z', 100);
      expect(obj.x.y.z).toBe(100);
    });

    test('should create nested arrays and objects', () => {
        const obj = {};
        set(obj, 'a.0.b', 'test');
        expect(Array.isArray(obj.a)).toBe(true);
        expect(obj.a[0].b).toBe('test');
    });

    test('should return the modified object', () => {
        const obj = {};
        const result = set(obj, 'a.b', 5);
        expect(result).toBe(obj);
        expect(result.a.b).toBe(5);
    });
  });
});
