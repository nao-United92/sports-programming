import { take, takeRight, drop, dropRight, first, last } from './array-take-drop-utils.js';

describe('Array Take/Drop Utilities', () => {
  const array = [1, 2, 3, 4, 5];

  // --- take ---
  describe('take', () => {
    it('should take the first n elements', () => {
      expect(take(array, 3)).toEqual([1, 2, 3]);
    });
    it('should default to taking the first element', () => {
      expect(take(array)).toEqual([1]);
    });
    it('should return an empty array if n is 0', () => {
      expect(take(array, 0)).toEqual([]);
    });
    it('should return the whole array if n is larger than length', () => {
      expect(take(array, 10)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  // --- takeRight ---
  describe('takeRight', () => {
    it('should take the last n elements', () => {
      expect(takeRight(array, 3)).toEqual([3, 4, 5]);
    });
    it('should default to taking the last element', () => {
      expect(takeRight(array)).toEqual([5]);
    });
    it('should return an empty array if n is 0', () => {
      expect(takeRight(array, 0)).toEqual([]);
    });
    it('should return the whole array if n is larger than length', () => {
      expect(takeRight(array, 10)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  // --- drop ---
  describe('drop', () => {
    it('should drop the first n elements', () => {
      expect(drop(array, 2)).toEqual([3, 4, 5]);
    });
    it('should default to dropping the first element', () => {
      expect(drop(array)).toEqual([2, 3, 4, 5]);
    });
    it('should return the whole array if n is 0', () => {
      expect(drop(array, 0)).toEqual([1, 2, 3, 4, 5]);
    });
    it('should return an empty array if n is larger than length', () => {
      expect(drop(array, 10)).toEqual([]);
    });
  });

  // --- dropRight ---
  describe('dropRight', () => {
    it('should drop the last n elements', () => {
      expect(dropRight(array, 2)).toEqual([1, 2, 3]);
    });
    it('should default to dropping the last element', () => {
      expect(dropRight(array)).toEqual([1, 2, 3, 4]);
    });
    it('should return the whole array if n is 0', () => {
      expect(dropRight(array, 0)).toEqual([1, 2, 3, 4, 5]);
    });
    it('should return an empty array if n is larger than length', () => {
      expect(dropRight(array, 10)).toEqual([]);
    });
  });

  // --- first ---
  describe('first', () => {
    it('should return the first element of an array', () => {
      expect(first([1, 2, 3])).toBe(1);
    });

    it('should return undefined for an empty array', () => {
      expect(first([])).toBeUndefined();
    });

    it('should return undefined for null or undefined input', () => {
      expect(first(null)).toBeUndefined();
      expect(first(undefined)).toBeUndefined();
    });
  });

  // --- last ---
  describe('last', () => {
    it('should return the last element of an array', () => {
      expect(last([1, 2, 3])).toBe(3);
    });

    it('should return undefined for an empty array', () => {
      expect(last([])).toBeUndefined();
    });

    it('should return undefined for null or undefined input', () => {
      expect(last(null)).toBeUndefined();
      expect(last(undefined)).toBeUndefined();
    });
  });
});
