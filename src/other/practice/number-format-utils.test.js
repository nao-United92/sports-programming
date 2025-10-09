import { formatNumber } from './number-format-utils';

describe('formatNumber', () => {
  it('should format a number with commas as thousands separators', () => {
    expect(formatNumber(1000)).toBe('1,000');
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('should handle numbers without thousands', () => {
    expect(formatNumber(123)).toBe('123');
  });

  it('should handle decimal numbers', () => {
    expect(formatNumber(1234.56)).toBe('1,234.56');
  });

  it('should handle negative numbers', () => {
    expect(formatNumber(-1234567)).toBe('-1,234,567');
  });

  it('should return the input as a string if it is not a number', () => {
    expect(formatNumber('1000')).toBe('1000');
    expect(formatNumber(null)).toBe('null');
    expect(formatNumber(undefined)).toBe('undefined');
  });
});
