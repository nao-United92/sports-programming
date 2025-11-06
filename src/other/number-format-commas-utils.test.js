import { formatNumberWithCommas } from './number-format-commas-utils.js';

describe('formatNumberWithCommas', () => {
  test('should format a positive integer with commas', () => {
    expect(formatNumberWithCommas(1000)).toBe('1,000');
    expect(formatNumberWithCommas(1234567)).toBe('1,234,567');
  });

  test('should format a negative integer with commas', () => {
    expect(formatNumberWithCommas(-1000)).toBe('-1,000');
    expect(formatNumberWithCommas(-1234567)).toBe('-1,234,567');
  });

  test('should format a number with decimals', () => {
    expect(formatNumberWithCommas(1234.56)).toBe('1,234.56');
    expect(formatNumberWithCommas(-1234.56)).toBe('-1,234.56');
  });

  test('should not add commas for numbers less than 1000', () => {
    expect(formatNumberWithCommas(123)).toBe('123');
    expect(formatNumberWithCommas(0)).toBe('0');
    expect(formatNumberWithCommas(-500)).toBe('-500');
  });

  test('should handle zero', () => {
    expect(formatNumberWithCommas(0)).toBe('0');
  });

  test('should handle NaN', () => {
    expect(formatNumberWithCommas(NaN)).toBe('NaN');
  });

  test('should handle non-numeric input', () => {
    expect(formatNumberWithCommas('abc')).toBe('abc');
    expect(formatNumberWithCommas(null)).toBe('null');
    expect(formatNumberWithCommas(undefined)).toBe('undefined');
  });
});
