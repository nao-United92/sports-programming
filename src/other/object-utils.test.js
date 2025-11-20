import { deepClone, get, set, isEmptyObject, deepMerge } from './object-utils';

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

  describe('isEmptyObject', () => {
    test('should return true for an empty object', () => {
      expect(isEmptyObject({})).toBe(true);
    });

    test('should return false for a non-empty object', () => {
      expect(isEmptyObject({ a: 1 })).toBe(false);
    });

    test('should return false for an object with inherited properties but no own properties', () => {
      function Parent() {}
      Parent.prototype.a = 1;
      const child = new Parent();
      expect(isEmptyObject(child)).toBe(true); // Object.keys only considers own enumerable properties
    });

    test('should return false for an array', () => {
      expect(isEmptyObject([])).toBe(false);
      expect(isEmptyObject([1, 2])).toBe(false);
    });

    test('should return false for null', () => {
      expect(isEmptyObject(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isEmptyObject(undefined)).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(isEmptyObject(1)).toBe(false);
      expect(isEmptyObject('string')).toBe(false);
      expect(isEmptyObject(true)).toBe(false);
    });

    test('should return false for a function', () => {
      expect(isEmptyObject(() => {})).toBe(false);
    });
  });

  describe('deepMerge', () => {
    it('should merge properties from source to target', () => {
      const obj1 = { a: 1 };
      const obj2 = { b: 2 };
      const merged = deepMerge(obj1, obj2);
      expect(merged).toEqual({ a: 1, b: 2 });
    });

    it('should overwrite properties in target with source properties', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      const merged = deepMerge(obj1, obj2);
      expect(merged).toEqual({ a: 1, b: 3, c: 4 });
    });

    it('should deeply merge nested objects', () => {
      const obj1 = { a: { b: 1 } };
      const obj2 = { a: { c: 2 } };
      const merged = deepMerge(obj1, obj2);
      expect(merged).toEqual({ a: { b: 1, c: 2 } });
    });

    it('should deeply merge nested objects and overwrite', () => {
      const obj1 = { a: { b: 1, d: 5 } };
      const obj2 = { a: { c: 2, d: 6 } };
      const merged = deepMerge(obj1, obj2);
      expect(merged).toEqual({ a: { b: 1, c: 2, d: 6 } });
    });

    it('should handle multiple source objects', () => {
      const obj1 = { a: 1 };
      const obj2 = { b: 2 };
      const obj3 = { c: 3 };
      const merged = deepMerge(obj1, obj2, obj3);
      expect(merged).toEqual({ a: 1, b: 2, c: 3 });
    });

    it('should concatenate arrays by default', () => {
      const obj1 = { a: [1, 2] };
      const obj2 = { a: [3, 4] };
      const merged = deepMerge(obj1, obj2);
      expect(merged).toEqual({ a: [1, 2, 3, 4] });
    });

    it('should overwrite if one is array and other is object', () => {
      const obj1 = { a: [1, 2] };
      const obj2 = { a: { b: 3 } };
      const merged = deepMerge(obj1, obj2);
      expect(merged).toEqual({ a: { b: 3 } });
    });

    it('should handle null and undefined sources gracefully', () => {
      const obj1 = { a: 1 };
      const obj2 = null;
      const obj3 = { b: 2 };
      const merged = deepMerge(obj1, obj2, obj3);
      expect(merged).toEqual({ a: 1, b: 2 });
    });

    it('should return target if target is not an object', () => {
      const str = 'hello';
      const obj = { a: 1 };
      const merged = deepMerge(str, obj);
      expect(merged).toBe('hello');
    });
  });
});
