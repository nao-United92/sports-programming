const { formatCurrency } = require('./format-currency-utils');

describe('formatCurrency', () => {
  test('should format a number to USD currency', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  test('should format a number to EUR currency', () => {
    expect(formatCurrency(1234.56, 'de-DE', 'EUR')).toBe('1.234,56\xa0€');
  });

  test('should format a number to JPY currency', () => {
    expect(formatCurrency(1234.56, 'ja-JP', 'JPY')).toBe('￥1,235');
  });

  test('should handle zero', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  test('should handle negative numbers', () => {
    expect(formatCurrency(-1234.56)).toBe('-$1,234.56');
  });
});
