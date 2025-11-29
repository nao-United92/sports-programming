// src/other/string-format-utils.test.js

const { formatCurrency } = require('./string-format-utils');

describe('String Format Utils', () => {
  describe('formatCurrency', () => {
    test('should format a number as USD currency by default', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
      expect(formatCurrency(100)).toBe('$100.00');
      expect(formatCurrency(0)).toBe('$0.00');
      expect(formatCurrency(-123.45)).toBe('-$123.45');
    });

    test('should format with a specified currency symbol', () => {
      expect(formatCurrency(1234.56, 'EUR', 'de-DE')).toBe('1.234,56 €');
      expect(formatCurrency(789.01, 'JPY', 'ja-JP')).toBe('￥789'); // JPY has no decimal places
    });

    test('should handle different locales', () => {
      expect(formatCurrency(1234.56, 'USD', 'en-GB')).toBe('US$1,234.56');
      expect(formatCurrency(1234.56, 'USD', 'fr-FR')).toBe('1 234,56 $US');
    });

    test('should return an empty string for non-numeric inputs', () => {
      expect(formatCurrency(null)).toBe('');
      expect(formatCurrency(undefined)).toBe('');
      expect(formatCurrency('abc')).toBe('');
      expect(formatCurrency({})).toBe('');
    });

    test('should handle large numbers', () => {
      expect(formatCurrency(123456789.123, 'USD')).toBe('$123,456,789.12');
    });

    test('should handle numbers with more than two decimal places', () => {
      expect(formatCurrency(123.456, 'USD')).toBe('$123.46');
      expect(formatCurrency(123.454, 'USD')).toBe('$123.45');
    });
  });
});