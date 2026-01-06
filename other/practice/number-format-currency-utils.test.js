const formatCurrency = require('./number-format-currency-utils');

describe('formatCurrency', () => {
  test('should format USD currency by default', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
    expect(formatCurrency(100)).toBe('$100.00');
    expect(formatCurrency(0)).toBe('$0.00');
  });

  test('should format EUR currency for en-US locale', () => {
    expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56');
    expect(formatCurrency(100, 'EUR')).toBe('€100.00');
  });

  test('should format JPY currency for ja-JP locale', () => {
    expect(formatCurrency(1234.56, 'JPY', 'ja-JP')).toBe('￥1,235'); // JPY usually no decimals
    expect(formatCurrency(100, 'JPY', 'ja-JP')).toBe('￥100');
  });

  test('should format GBP currency for en-GB locale', () => {
    expect(formatCurrency(99.99, 'GBP', 'en-GB')).toBe('£99.99');
  });

  test('should handle negative amounts', () => {
    expect(formatCurrency(-123.45)).toBe('-$123.45');
    expect(formatCurrency(-100, 'EUR')).toBe('-€100.00');
  });

  test('should handle zero amounts', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  test('should return empty string for non-number inputs', () => {
    expect(formatCurrency('abc')).toBe('');
    expect(formatCurrency(null)).toBe('');
    expect(formatCurrency(undefined)).toBe('');
    expect(formatCurrency({})).toBe('');
  });

  test('should return empty string for NaN inputs', () => {
    expect(formatCurrency(NaN)).toBe('');
  });

  // Test for invalid locale/currency falling back
});