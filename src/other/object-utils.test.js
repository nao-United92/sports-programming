import { isPlainObject } from './object-utils.js';

describe('object-utils', () => {
  describe('isPlainObject', () => {
    it('should return true for plain objects', () => {
      expect(isPlainObject({})).toBe(true);
      expect(isPlainObject({ a: 1 })).toBe(true);
      expect(isPlainObject(new Object())).toBe(true);
    });

    it('should return false for non-plain objects', () => {
      function MyClass() {}
      expect(isPlainObject(new MyClass())).toBe(false);
      expect(isPlainObject([])).toBe(false);
      expect(isPlainObject(new Map())).toBe(false);
      expect(isPlainObject(/a/)).toBe(false);
      expect(isPlainObject(new Date())).toBe(false);
    });

    it('should return false for primitive values', () => {
      expect(isPlainObject(null)).toBe(false);
      expect(isPlainObject(undefined)).toBe(false);
      expect(isPlainObject(123)).toBe(false);
      expect(isPlainObject('abc')).toBe(false);
      expect(isPlainObject(true)).toBe(false);
      expect(isPlainObject(Symbol('a'))).toBe(false);
    });
     it('should return true for objects created with Object.create(null)', () => {
      expect(isPlainObject(Object.create(null))).toBe(true);
    });
  });
});
