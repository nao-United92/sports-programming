import { isInteger, isPositive, isNegative } from './number-validation-utils';

describe('number-validation-utils', () => {
  describe('isInteger', () => {
    test('should return true for integers', () => {
      expect(isInteger(10)).toBe(true);
      expect(isInteger(-5)).toBe(true);
      expect(isInteger(0)).toBe(true);
    });

    test('should return false for non-integers', () => {
      expect(isInteger(10.5)).toBe(false);
      expect(isInteger(Math.PI)).toBe(false);
      expect(isInteger('10')).toBe(false);
      expect(isInteger(null)).toBe(false);
      expect(isInteger(undefined)).toBe(false);
      expect(isInteger({})).toBe(false);
    });
  });

  describe('isPositive', () => {
    test('should return true for positive numbers', () => {
      expect(isPositive(10)).toBe(true);
      expect(isPositive(0.1)).toBe(true);
    });

    test('should return false for zero or negative numbers', () => {
      expect(isPositive(0)).toBe(false);
      expect(isPositive(-10)).toBe(false);
    });

    test('should return false for non-numbers', () => {
      expect(isPositive('10')).toBe(false);
      expect(isPositive(null)).toBe(false);
      expect(isPositive(undefined)).toBe(false);
    });
  });

  describe('isNegative', () => {
    test('should return true for negative numbers', () => {
      expect(isNegative(-10)).toBe(true);
      expect(isNegative(-0.1)).toBe(true);
    });

    test('should return false for zero or positive numbers', () => {
      expect(isNegative(0)).toBe(false);
      expect(isNegative(10)).toBe(false);
    });

    test('should return false for non-numbers', () => {
      expect(isNegative(' -10')).toBe(false);
      expect(isNegative(null)).toBe(false);
      expect(isNegative(undefined)).toBe(false);
    });
  });
});
