import { round } from './number-utils.js';

describe('Number Utilities', () => {
  describe('round', () => {
    it('should round a number to the nearest integer by default', () => {
      expect(round(10.4)).toBe(10);
      expect(round(10.5)).toBe(11);
      expect(round(10.6)).toBe(11);
      expect(round(-10.4)).toBe(-10);
      expect(round(-10.5)).toBe(-10); // Math.round rounds .5 up for positive, down for negative
      expect(round(-10.6)).toBe(-11);
    });

    it('should round a number to a specified precision', () => {
      expect(round(10.123, 2)).toBe(10.12);
      expect(round(10.125, 2)).toBe(10.13);
      expect(round(10.126, 2)).toBe(10.13);
      expect(round(10.999, 2)).toBe(11.00);
    });

    it('should handle zero precision', () => {
      expect(round(10.5, 0)).toBe(11);
      expect(round(10.49, 0)).toBe(10);
    });

    it('should handle negative precision', () => {
      expect(round(12345, -2)).toBe(12300);
      expect(round(12355, -2)).toBe(12400);
      expect(round(12345.67, -1)).toBe(12350);
    });

    it('should return NaN for non-numeric input', () => {
      expect(isNaN(round('abc'))).toBe(true);
      expect(isNaN(round(null))).toBe(true);
      expect(isNaN(round(undefined))).toBe(true);
      expect(isNaN(round({}))).toBe(true);
    });

    it('should handle non-numeric precision gracefully', () => {
      expect(round(10.123, 'abc')).toBe(10);
      expect(round(10.123, null)).toBe(10);
      expect(round(10.123, undefined)).toBe(10);
    });
  });
});