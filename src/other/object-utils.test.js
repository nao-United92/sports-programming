import { deepMerge } from './object-utils.js';

describe('Object Utilities', () => {
  describe('deepMerge', () => {
    it('should merge properties of two flat objects', () => {
      const target = { a: 1, b: 2 };
      const source = { c: 3, d: 4 };
      const result = deepMerge(target, source);
      expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
      expect(result).toBe(target); // Should mutate target
    });

    it('should overwrite existing properties', () => {
      const target = { a: 1, b: 2 };
      const source = { b: 3, c: 4 };
      const result = deepMerge(target, source);
      expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });

    it('should deeply merge nested objects', () => {
      const target = { a: 1, b: { c: 2, d: 3 } };
      const source = { b: { e: 4 }, f: 5 };
      const result = deepMerge(target, source);
      expect(result).toEqual({ a: 1, b: { c: 2, d: 3, e: 4 }, f: 5 });
      expect(result.b).toBe(target.b); // Should mutate nested object
    });

    it('should handle nested objects that are initially undefined in target', () => {
      const target = { a: 1 };
      const source = { b: { c: 2 } };
      const result = deepMerge(target, source);
      expect(result).toEqual({ a: 1, b: { c: 2 } });
    });

    it('should replace arrays, not merge them', () => {
      const target = { a: [1, 2], b: 3 };
      const source = { a: [3, 4], c: 5 };
      const result = deepMerge(target, source);
      expect(result).toEqual({ a: [3, 4], b: 3, c: 5 });
    });

    it('should handle null and undefined values correctly', () => {
      const target = { a: 1, b: null };
      const source = { a: null, b: undefined, c: 3 };
      const result = deepMerge(target, source);
      expect(result).toEqual({ a: null, b: undefined, c: 3 });
    });

    it('should return the target object even if source is empty', () => {
      const target = { a: 1 };
      const source = {};
      const result = deepMerge(target, source);
      expect(result).toEqual({ a: 1 });
      expect(result).toBe(target);
    });

    it('should return the target object even if target is empty', () => {
      const target = {};
      const source = { a: 1 };
      const result = deepMerge(target, source);
      expect(result).toEqual({ a: 1 });
      expect(result).toBe(target);
    });
  });
});