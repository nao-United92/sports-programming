// src/other/number-formatting-utils.test.js

const { formatNumberWithCommas } = require('./number-formatting-utils');

describe('Number Formatting Utils', () => {
  describe('formatNumberWithCommas', () => {
    test('should format an integer with commas', () => {
      expect(formatNumberWithCommas(1000)).toBe('1,000');
      expect(formatNumberWithCommas(1234567)).toBe('1,234,567');
    });

    test('should format a floating-point number with commas', () => {
      expect(formatNumberWithCommas(1234.56)).toBe('1,234.56');
      expect(formatNumberWithCommas(1234567.891)).toBe('1,234,567.891');
    });

    test('should handle numbers less than 1000 without commas', () => {
      expect(formatNumberWithCommas(123)).toBe('123');
      expect(formatNumberWithCommas(0)).toBe('0');
    });

    test('should handle negative numbers', () => {
      expect(formatNumberWithCommas(-1000)).toBe('-1,000');
      expect(formatNumberWithCommas(-12345.67)).toBe('-12,345.67');
    });

    test('should return "NaN" for NaN input', () => {
      expect(formatNumberWithCommas(NaN)).toBe('NaN');
    });

    test('should return "Infinity" for Infinity input', () => {
      expect(formatNumberWithCommas(Infinity)).toBe('Infinity');
      expect(formatNumberWithCommas(-Infinity)).toBe('-Infinity');
    });

    test('should return the original value as string for non-numeric inputs', () => {
      expect(formatNumberWithCommas(null)).toBe('null');
      expect(formatNumberWithCommas(undefined)).toBe('undefined');
      expect(formatNumberWithCommas('abc')).toBe('abc');
      expect(formatNumberWithCommas({})).toBe('[object Object]');
    });
  });
});
