import { isEqualArray, isEqualArrayDeep } from './array-comparison-utils.js';

describe('Array Comparison Utilities', () => {
  describe('isEqualArray', () => {
    test('should return true for two identical arrays of primitives', () => {
      expect(isEqualArray([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    test('should return false for arrays with different elements', () => {
      expect(isEqualArray([1, 2, 3], [1, 2, 4])).toBe(false);
    });

    test('should return false for arrays with different order', () => {
      expect(isEqualArray([1, 2, 3], [1, 3, 2])).toBe(false);
    });

    test('should return false for arrays of different lengths', () => {
      expect(isEqualArray([1, 2], [1, 2, 3])).toBe(false);
      expect(isEqualArray([1, 2, 3], [1, 2])).toBe(false);
    });

    test('should return true for two empty arrays', () => {
      expect(isEqualArray([], [])).toBe(true);
    });

    test('should return false for arrays containing objects (shallow comparison)', () => {
      const obj1 = { a: 1 };
      const obj2 = { a: 1 };
      expect(isEqualArray([obj1], [obj1])).toBe(true);
      expect(isEqualArray([obj1], [obj2])).toBe(false); // Different object references
    });

    test('should return false for non-array inputs', () => {
      expect(isEqualArray(null, [])).toBe(false);
      expect(isEqualArray([], undefined)).toBe(false);
      expect(isEqualArray('string', 'string')).toBe(false);
    });
  });

  describe('isEqualArrayDeep', () => {
    test('should return true for two identical arrays of primitives', () => {
      expect(isEqualArrayDeep([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    test('should return true for arrays with identical nested arrays', () => {
      expect(isEqualArrayDeep([1, [2, 3]], [1, [2, 3]])).toBe(true);
    });

    test('should return true for arrays with identical nested objects', () => {
      expect(isEqualArrayDeep([1, { a: 2, b: 3 }], [1, { a: 2, b: 3 }])).toBe(true);
    });

    test('should return true for arrays with complex nested structures', () => {
      const arr1 = [1, [2, { x: 10, y: [11, 12] }], { z: [13, { w: 14 }] }];
      const arr2 = [1, [2, { x: 10, y: [11, 12] }], { z: [13, { w: 14 }] }];
      expect(isEqualArrayDeep(arr1, arr2)).toBe(true);
    });

    test('should return false for arrays with different nested array elements', () => {
      expect(isEqualArrayDeep([1, [2, 3]], [1, [2, 4]])).toBe(false);
    });

    test('should return false for arrays with different nested object properties', () => {
      expect(isEqualArrayDeep([1, { a: 2, b: 3 }], [1, { a: 2, b: 4 }])).toBe(false);
    });

    test('should return false for arrays with different nested object keys', () => {
      expect(isEqualArrayDeep([1, { a: 2 }], [1, { b: 2 }])).toBe(false);
    });

    test('should return false for arrays of different lengths', () => {
      expect(isEqualArrayDeep([1, 2], [1, 2, 3])).toBe(false);
    });

    test('should return true for two empty arrays', () => {
      expect(isEqualArrayDeep([], [])).toBe(true);
    });

    test('should return false for non-array inputs', () => {
      expect(isEqualArrayDeep(null, [])).toBe(false);
      expect(isEqualArrayDeep([], undefined)).toBe(false);
    });

    test('should handle null/undefined values within arrays', () => {
      expect(isEqualArrayDeep([1, null, 3], [1, null, 3])).toBe(true);
      expect(isEqualArrayDeep([1, undefined, 3], [1, undefined, 3])).toBe(true);
      expect(isEqualArrayDeep([1, null, 3], [1, undefined, 3])).toBe(false);
    });
  });
});