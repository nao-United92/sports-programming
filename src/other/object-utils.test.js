import { isPlainObject, pick, omit } from './object-utils.js';

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

  describe('pick', () => {
    it('should create an object with picked properties', () => {
      const obj = { a: 1, b: '2', c: true };
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
    });

    it('should ignore keys that are not in the object', () => {
      const obj = { a: 1, b: '2' };
      expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
    });

    it('should return an empty object if no keys are picked', () => {
      const obj = { a: 1, b: '2' };
      expect(pick(obj, [])).toEqual({});
    });
  });

  describe('omit', () => {
    it('should create an object without omitted properties', () => {
      const obj = { a: 1, b: '2', c: true };
      expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
    });

    it('should ignore keys that are not in the object', () => {
      const obj = { a: 1, b: '2' };
      expect(omit(obj, ['c', 'd'])).toEqual({ a: 1, b: '2' });
    });

    it('should return the same object if no keys are omitted', () => {
      const obj = { a: 1, b: '2' };
      expect(omit(obj, [])).toEqual({ a: 1, b: '2' });
    });
  });
});
