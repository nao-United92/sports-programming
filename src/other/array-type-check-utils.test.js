import { isArrayOfStrings, isArrayOfNumbers } from './array-type-check-utils.js';

describe('Array Type Check Utilities', () => {
  describe('isArrayOfStrings', () => {
    test('should return true for an array of strings', () => {
      expect(isArrayOfStrings(['a', 'b', 'c'])).toBe(true);
    });

    test('should return true for an empty array', () => {
      expect(isArrayOfStrings([])).toBe(true);
    });

    test('should return false for an array with numbers', () => {
      expect(isArrayOfStrings(['a', 1, 'c'])).toBe(false);
    });

    test('should return false for an array with mixed types', () => {
      expect(isArrayOfStrings(['a', null, 'c'])).toBe(false);
    });

    test('should return false for a non-array value', () => {
      expect(isArrayOfStrings('string')).toBe(false);
      expect(isArrayOfStrings(123)).toBe(false);
      expect(isArrayOfStrings(null)).toBe(false);
      expect(isArrayOfStrings(undefined)).toBe(false);
      expect(isArrayOfStrings({})).toBe(false);
    });
  });

  describe('isArrayOfNumbers', () => {
    test('should return true for an array of numbers', () => {
      expect(isArrayOfNumbers([1, 2, 3])).toBe(true);
    });

    test('should return true for an empty array', () => {
      expect(isArrayOfNumbers([])).toBe(true);
    });

    test('should return false for an array with strings', () => {
      expect(isArrayOfNumbers([1, '2', 3])).toBe(false);
    });

    test('should return false for an array with mixed types', () => {
      expect(isArrayOfNumbers([1, null, 3])).toBe(false);
    });

    test('should return false for a non-array value', () => {
      expect(isArrayOfNumbers('string')).toBe(false);
      expect(isArrayOfNumbers(123)).toBe(false);
      expect(isArrayOfNumbers(null)).toBe(false);
      expect(isArrayOfNumbers(undefined)).toBe(false);
      expect(isArrayOfNumbers({})).toBe(false);
    });
  });
});