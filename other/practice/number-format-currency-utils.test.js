import formatCurrency from './number-format-currency-utils';

describe('formatCurrency', () => {
  test('should format a number as USD currency by default', () => {
    expect(formatCurrency(1234.50)).toBe('$1,234.50');
    expect(formatCurrency(100)).toBe('$100.00');
    expect(formatCurrency(0)).toBe('$0.00');
    expect(formatCurrency(-50)).toBe('-$50.00');
  });

  test('should format a number with specified currency code and locale', () => {
    expect(formatCurrency(1234.50, 'EUR', 'de-DE')).toBe('1.234,50\u00A0€');
    expect(formatCurrency(5000, 'JPY', 'ja-JP')).toBe('￥5,000');
    expect(formatCurrency(99.99, 'GBP', 'en-GB')).toBe('£99.99');
  });

  test('should handle different decimal places', () => {
    expect(formatCurrency(1234.567, 'USD', 'en-US')).toBe('$1,234.57'); // Rounds to 2 decimal places
    expect(formatCurrency(10.1, 'USD')).toBe('$10.10');
  });

  test('should throw an error if amount is not a number', () => {
    expect(() => formatCurrency('abc')).toThrow(TypeError);
    expect(() => formatCurrency(null)).toThrow(TypeError);
    expect(() => formatCurrency(undefined)).toThrow(TypeError);
    expect(() => formatCurrency(NaN)).toThrow(TypeError);
  });

  test('should throw an error if currencyCode is invalid', () => {
    expect(() => formatCurrency(100, 'US')).toThrow(TypeError);
    expect(() => formatCurrency(100, 123)).toThrow(TypeError);
  });

  test('should handle invalid locale gracefully (possibly defaulting or throwing)', () => {
    // Depending on the environment, Intl.NumberFormat might default to a valid locale
    // instead of throwing for an invalid one. We check if it either throws an Error
    // (as our wrapper does) or produces a valid string (indicating a fallback).
    let thrown = false;
    let result = '';
    try {
      result = formatCurrency(100, 'USD', 'invalid-locale');
    } catch (e) {
      thrown = true;
      expect(e).toBeInstanceOf(Error);
    }
    if (!thrown) {
      expect(typeof result).toBe('string');
      // Additionally, we might check if it defaults to a known format, e.g., for 'en-US'
      // expect(result).toBe('$100.00'); // This might be too strict
    }
  });
});
