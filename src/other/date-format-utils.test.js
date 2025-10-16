import { formatDate } from './date-format-utils.js';

describe('formatDate', () => {
  test('should format a valid date correctly', () => {
    const date = new Date('2024-01-02');
    expect(formatDate(date)).toBe('2024-01-02');
  });

  test('should handle single digit month and day', () => {
    const date = new Date('2024-03-04T12:00:00Z');
    // Adjust for timezone differences in testing environment
    const utcDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    expect(formatDate(utcDate)).toBe('2024-03-04');
  });

  test('should return an empty string for an invalid date', () => {
    const invalidDate = new Date('not a date');
    expect(formatDate(invalidDate)).toBe('');
  });

  test('should return an empty string for non-Date input', () => {
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
    expect(formatDate('2024-01-01')).toBe('');
  });
});