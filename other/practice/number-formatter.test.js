import { formatNumber } from './number-formatter.js';

describe('formatNumber', () => {
  test('should format a number with default options', () => {
    expect(formatNumber(12345.6789)).toBe('12,346');
  });

  test('should format a number with custom decimal places', () => {
    expect(formatNumber(12345.6789, { minimumFractionDigits: 2, maximumFractionDigits: 2 })).toBe('12,345.68');
  });

  test('should format a number as currency', () => {
    expect(formatNumber(12345.67, { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })).toBe('$12,345.67');
  });

  test('should format a number as percent', () => {
    expect(formatNumber(0.123, { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 })).toBe('12.3%');
  });

  test('should handle locale-specific formatting (e.g., German)', () => {
    // Note: Jest's JSDOM environment might not fully support all locales for Intl.NumberFormat
    // This test might produce different results depending on the environment.
    expect(formatNumber(12345.6789, { locale: 'de-DE', minimumFractionDigits: 2, maximumFractionDigits: 2 })).toBe('12.345,68');
  });

  test('should handle no grouping', () => {
    expect(formatNumber(1234567, { useGrouping: false })).toBe('1234567');
  });

  test('should return an empty string for non-number inputs', () => {
    expect(formatNumber('abc')).toBe('');
    expect(formatNumber(null)).toBe('');
    expect(formatNumber(undefined)).toBe('');
    expect(formatNumber(NaN)).toBe('');
  });

  test('should fallback to toString for invalid options (e.g., unsupported currency)', () => {
    // Depending on the Node.js version/environment, 'XYZ' might not be a valid currency.
    // This tests the fallback mechanism.
    const originalConsoleError = console.error;
    console.error = jest.fn(); // Suppress console error for this test
    expect(formatNumber(100, { style: 'currency', currency: 'XYZ' })).toBe('100');
    expect(console.error).toHaveBeenCalled();
    console.error = originalConsoleError; // Restore original console.error
  });
});
