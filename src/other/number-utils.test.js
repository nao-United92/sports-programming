import { formatWithCommas } from './number-utils.js';

describe('formatWithCommas', () => {
  it('should format a number with commas', () => {
    expect(formatWithCommas(1000)).toBe('1,000');
    expect(formatWithCommas(1234567)).toBe('1,234,567');
  });

  it('should not format numbers less than 1000', () => {
    expect(formatWithCommas(999)).toBe('999');
    expect(formatWithCommas(100)).toBe('100');
  });

  it('should handle decimal numbers', () => {
    expect(formatWithCommas(12345.6789)).toBe('12,345.6789');
  });

  it('should handle negative numbers', () => {
    expect(formatWithCommas(-1234567)).toBe('-1,234,567');
  });

  it('should return non-number inputs as strings', () => {
    expect(formatWithCommas('10000')).toBe('10000');
    expect(formatWithCommas(null)).toBe('null');
  });
});