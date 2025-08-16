import { mergeDeep, cloneDeep } from './object-manipulation-utils';

describe('Object Manipulation Utilities', () => {
  describe('mergeDeep', () => {
    it('should deeply merge two objects', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { b: { d: 3 }, e: 4 };
      const merged = mergeDeep(obj1, obj2);
      expect(merged).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
    });

    it('should deeply merge multiple objects', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { b: { d: 3 } };
      const obj3 = { e: 5, b: { f: 6 } };
      const merged = mergeDeep(obj1, obj2, obj3);
      expect(merged).toEqual({ a: 1, b: { c: 2, d: 3, f: 6 }, e: 5 });
    });

    it('should handle empty objects', () => {
      const obj1 = { a: 1 };
      const obj2 = {};
      const merged = mergeDeep(obj1, obj2);
      expect(merged).toEqual({ a: 1 });
    });

    it('should overwrite primitive values', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      const merged = mergeDeep(obj1, obj2);
      expect(merged).toEqual({ a: 1, b: 3, c: 4 });
    });
  });

  describe('cloneDeep', () => {
    it('should deeply clone an object', () => {
      const obj = { a: 1, b: { c: 2 }, d: [3, { e: 4 }] };
      const cloned = cloneDeep(obj);
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
      expect(cloned.b).not.toBe(obj.b);
      expect(cloned.d).not.toBe(obj.d);
      expect(cloned.d[1]).not.toBe(obj.d[1]);
    });

    it('should handle arrays', () => {
      const arr = [1, { a: 2 }, [3, 4]];
      const cloned = cloneDeep(arr);
      expect(cloned).toEqual(arr);
      expect(cloned).not.toBe(arr);
      expect(cloned[1]).not.toBe(arr[1]);
      expect(cloned[2]).not.toBe(arr[2]);
    });

    it('should handle primitive values', () => {
      expect(cloneDeep(1)).toBe(1);
      expect(cloneDeep('test')).toBe('test');
      expect(cloneDeep(true)).toBe(true);
      expect(cloneDeep(null)).toBe(null);
      expect(cloneDeep(undefined)).toBe(undefined);
    });

    it('should handle Date objects', () => {
      const date = new Date();
      const cloned = cloneDeep(date);
      expect(cloned).toEqual(date);
      expect(cloned).not.toBe(date);
    });
  });
});
