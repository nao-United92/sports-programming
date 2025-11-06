import { formatYYYYMMDD } from './date-format-utils.js';

describe('formatYYYYMMDD', () => {
  it('should format a valid date correctly', () => {
    const date = new Date('2023-10-27T10:00:00Z');
    expect(formatYYYYMMDD(date)).toBe('2023-10-27');
  });

  it('should handle single-digit months and days', () => {
    const date = new Date('2023-01-05T10:00:00Z');
    expect(formatYYYYMMDD(date)).toBe('2023-01-05');
  });

  it('should return an empty string for an invalid date', () => {
    const date = new Date('invalid-date');
    expect(formatYYYYMMDD(date)).toBe('');
  });

  it('should return an empty string for non-Date input', () => {
    expect(formatYYYYMMDD(null)).toBe('');
    expect(formatYYYYMMDD(undefined)).toBe('');
    expect(formatYYYYMMDD('2023-10-27')).toBe('');
  });
});
