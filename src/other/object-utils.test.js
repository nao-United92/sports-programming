import { deepClone, isEmpty } from './object-utils.js';

describe('Object Utilities', () => {
  describe('deepClone', () => {
    it('should create a deep clone of a simple object', () => {
      const original = { a: 1, b: 'hello' };
      const clone = deepClone(original);
      expect(clone).toEqual(original);
      expect(clone).not.toBe(original);
    });

    it('should create a deep clone of a nested object', () => {
      const original = { a: 1, b: { c: 2, d: [3, 4] } };
      const clone = deepClone(original);
      expect(clone).toEqual(original);
      expect(clone).not.toBe(original);
      expect(clone.b).not.toBe(original.b);
      expect(clone.b.d).not.toBe(original.b.d);
    });

    it('should handle arrays correctly', () => {
        const original = [{ a: 1 }, { b: 2 }];
        const clone = deepClone(original);
        expect(clone).toEqual(original);
        expect(clone[0]).not.toBe(original[0]);
    });

    it('should handle dates correctly', () => {
        const original = { d: new Date() };
        const clone = deepClone(original);
        expect(clone.d.getTime()).toBe(original.d.getTime());
        expect(clone.d).not.toBe(original.d);
    });

    it('should return the same value for primitives', () => {
        expect(deepClone(123)).toBe(123);
        expect(deepClone('test')).toBe('test');
        expect(deepClone(null)).toBe(null);
    });
  });

  describe('isEmpty', () => {
    it('should return true for an empty object', () => {
      expect(isEmpty({})).toBe(true);
    });

    it('should return false for a non-empty object', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    it('should return true for null or undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    it('should return false for non-plain objects', () => {
        expect(isEmpty([])).toBe(false);
        expect(isEmpty(new Date())).toBe(false);
        expect(isEmpty(() => {})).toBe(false);
    });
  });
});