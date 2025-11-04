import { formatDate, isLeapYear } from './date-utils.js';

describe('Date Utilities', () => {
  describe('formatDate', () => {
    it('should format a date object into YYYY-MM-DD format', () => {
      const date = new Date('2024-01-05T12:00:00.000Z');
      expect(formatDate(date)).toBe('2024-01-05');
    });

    it('should handle single-digit months and days', () => {
      const date = new Date('2023-03-04T00:00:00.000Z');
      expect(formatDate(date)).toBe('2023-03-04');
    });

    it('should return an empty string for an invalid date', () => {
      expect(formatDate(new Date('invalid-date'))).toBe('');
      expect(formatDate(null)).toBe('');
      expect(formatDate(undefined)).toBe('');
    });
  });

  describe('isLeapYear', () => {
    it('should return true for leap years', () => {
      expect(isLeapYear(2000)).toBe(true);
      expect(isLeapYear(2020)).toBe(true);
      expect(isLeapYear(2400)).toBe(true);
    });

    it('should return false for common years', () => {
      expect(isLeapYear(1900)).toBe(false);
      expect(isLeapYear(2021)).toBe(false);
      expect(isLeapYear(2100)).toBe(false);
    });

    it('should return false for non-number inputs', () => {
        expect(isLeapYear('2020')).toBe(false);
        expect(isLeapYear(null)).toBe(false);
        expect(isLeapYear(undefined)).toBe(false);
    });
  });
});