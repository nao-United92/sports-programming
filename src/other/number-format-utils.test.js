import { formatCurrency, formatPercentage } from './number-format-utils.js';

describe('numberFormatUtils', () => {
  describe('formatCurrency', () => {
    it('should format a number as USD currency', () => {
      expect(formatCurrency(1234.56, 'USD', 'en-US')).toBe('$1,234.56');
    });

    it('should format a number as JPY currency', () => {
      expect(formatCurrency(1234, 'JPY', 'ja-JP')).toBe('￥1,234');
    });

    it('should return an empty string for non-numeric input', () => {
      expect(formatCurrency(null, 'USD', 'en-US')).toBe('');
      expect(formatCurrency(undefined, 'USD', 'en-US')).toBe('');
      expect(formatCurrency('abc', 'USD', 'en-US')).toBe('');
      expect(formatCurrency(NaN, 'USD', 'en-US')).toBe('');
    });

    it('should handle different locales', () => {
      expect(formatCurrency(1234.56, 'EUR', 'de-DE')).toMatch(/^1\.234,[0-9]{2}\s€$/);
    });

    it('should handle zero amount', () => {
      expect(formatCurrency(0, 'USD', 'en-US')).toBe('$0.00');
    });
  });

  describe('formatPercentage', () => {
    it('should format a number as a percentage with default fraction digits', () => {
      expect(formatPercentage(0.5, 'en-US')).toBe('50%');
      expect(formatPercentage(0.1234, 'en-US')).toBe('12%');
    });

    it('should format a number as a percentage with specified fraction digits', () => {
      expect(formatPercentage(0.1234, 'en-US', 2, 2)).toBe('12.34%');
      expect(formatPercentage(0.5, 'en-US', 1, 1)).toBe('50.0%');
    });

    it('should return an empty string for non-numeric input', () => {
      expect(formatPercentage(null, 'en-US')).toBe('');
      expect(formatPercentage(undefined, 'en-US')).toBe('');
      expect(formatPercentage('abc', 'en-US')).toBe('');
      expect(formatPercentage(NaN, 'en-US')).toBe('');
    });

    it('should handle different locales', () => {
      expect(formatPercentage(0.75, 'de-DE')).toMatch(/^75\s%$/);
    });

    it('should handle zero value', () => {
      expect(formatPercentage(0, 'en-US')).toBe('0%');
    });
  });
});
