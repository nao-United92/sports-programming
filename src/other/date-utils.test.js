// src/other/date-utils.test.js

const { formatDate } = require('./date-utils');

describe('Date Utils', () => {
  describe('formatDate', () => {
    test('should format a Date object to YYYY-MM-DD string', () => {
      const date = new Date('2023-01-15T10:00:00Z');
      expect(formatDate(date)).toBe('2023-01-15');
    });

    test('should handle single digit month and day correctly', () => {
      const date = new Date('2023-03-05T10:00:00Z');
      expect(formatDate(date)).toBe('2023-03-05');
    });

    test('should return an empty string for invalid Date objects', () => {
      expect(formatDate(new Date('invalid date'))).toBe('');
    });

    test('should return an empty string for non-Date inputs', () => {
      expect(formatDate(null)).toBe('');
      expect(formatDate(undefined)).toBe('');
      expect(formatDate('2023-01-15')).toBe('');
      expect(formatDate(12345)).toBe('');
    });

    test('should handle leap year February', () => {
      const date = new Date('2024-02-29T10:00:00Z');
      expect(formatDate(date)).toBe('2024-02-29');
    });

    test('should handle end of year', () => {
      const date = new Date('2023-12-31T10:00:00Z');
      expect(formatDate(date)).toBe('2023-12-31');
    });
  });
});