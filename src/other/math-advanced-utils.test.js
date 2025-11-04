import { mapRange, roundToDecimal } from './math-advanced-utils.js';

describe('Math Advanced Utilities', () => {
  describe('mapRange', () => {
    it('should map a value from one range to another', () => {
      expect(mapRange(5, 0, 10, 0, 100)).toBe(50);
      expect(mapRange(0, 0, 10, 0, 100)).toBe(0);
      expect(mapRange(10, 0, 10, 0, 100)).toBe(100);
      expect(mapRange(50, 0, 100, 0, 10)).toBe(5);
    });

    it('should handle negative ranges', () => {
      expect(mapRange(0, -10, 10, 0, 100)).toBe(50);
      expect(mapRange(-10, -10, 10, 0, 100)).toBe(0);
      expect(mapRange(10, -10, 10, 0, 100)).toBe(100);
    });

    it('should handle inverted output ranges', () => {
      expect(mapRange(5, 0, 10, 100, 0)).toBe(50);
      expect(mapRange(0, 0, 10, 100, 0)).toBe(100);
      expect(mapRange(10, 0, 10, 100, 0)).toBe(0);
    });
  });

  describe('roundToDecimal', () => {
    it('should round a number to the specified decimal places', () => {
      expect(roundToDecimal(10.12345, 2)).toBe(10.12);
      expect(roundToDecimal(10.128, 2)).toBe(10.13);
      expect(roundToDecimal(10, 0)).toBe(10);
      expect(roundToDecimal(10.5, 0)).toBe(11);
      expect(roundToDecimal(10.49, 0)).toBe(10);
    });

    it('should handle zero decimal places', () => {
      expect(roundToDecimal(123.456, 0)).toBe(123);
    });

    it('should handle negative numbers', () => {
      expect(roundToDecimal(-10.128, 2)).toBe(-10.13);
    });

    it('should throw an error for negative decimal places', () => {
      expect(() => roundToDecimal(10, -1)).toThrow('Decimal places cannot be negative.');
    });
  });
});
