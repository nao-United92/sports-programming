import { formatNumber, sprintf } from './string-format-utils';

describe('string-format-utils', () => {
  describe('formatNumber', () => {
    test('should format a number with default settings', () => {
      expect(formatNumber(1234567.89)).toBe('1,234,568');
    });

    test('should format a number with specified decimals', () => {
      expect(formatNumber(1234567.89, 2)).toBe('1,234,567.89');
    });

    test('should format a number with custom separators', () => {
      expect(formatNumber(1234567.89, 2, ',', '.')).toBe('1.234.567,89');
    });

    test('should handle negative numbers', () => {
      expect(formatNumber(-12345.67, 2, '.', ',')).toBe('-12,345.67');
    });

    test('should handle zero', () => {
      expect(formatNumber(0, 2)).toBe('0.00');
    });
  });

  describe('sprintf', () => {
    test('should replace placeholders with arguments', () => {
      expect(sprintf('Hello %s, welcome to %s!', 'World', 'our app')).toBe('Hello World, welcome to our app!');
    });

    test('should handle multiple placeholders', () => {
      expect(sprintf('%s %s %s', 'one', 'two', 'three')).toBe('one two three');
    });

    test('should return the format string if no arguments are provided', () => {
      expect(sprintf('Hello %s')).toBe('Hello undefined');
    });
  });
});
