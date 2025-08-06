import { formatDate, getDaysInMonth } from './date-format-utils.js';

describe('dateFormatUtils', () => {
  describe('formatDate', () => {
    it('should format a date in en-US locale', () => {
      const date = new Date('2023-01-15T10:00:00Z');
      expect(formatDate(date, 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })).toBe('January 15, 2023');
    });

    it('should format a date in ja-JP locale', () => {
      const date = new Date('2023-01-15T10:00:00Z');
      expect(formatDate(date, 'ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })).toBe('2023年1月15日');
    });

    it('should return an empty string for invalid date input', () => {
      expect(formatDate(null, 'en-US')).toBe('');
      expect(formatDate(undefined, 'en-US')).toBe('');
      expect(formatDate('invalid date', 'en-US')).toBe('');
      expect(formatDate(new Date('invalid'), 'en-US')).toBe('');
    });

    it('should handle different options', () => {
      const date = new Date('2023-01-15T10:00:00Z');
      expect(formatDate(date, 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })).toBe('Sunday, January 15, 2023');
    });
  });

  describe('getDaysInMonth', () => {
    it('should return the correct number of days for a common month', () => {
      expect(getDaysInMonth(2023, 1)).toBe(31); // January
      expect(getDaysInMonth(2023, 2)).toBe(28); // February (non-leap year)
      expect(getDaysInMonth(2023, 4)).toBe(30); // April
    });

    it('should return 29 for February in a leap year', () => {
      expect(getDaysInMonth(2024, 2)).toBe(29); // February (leap year)
    });

    it('should return 0 for invalid month or year', () => {
      expect(getDaysInMonth(2023, 0)).toBe(0);
      expect(getDaysInMonth(2023, 13)).toBe(0);
      expect(getDaysInMonth(null, 1)).toBe(0);
      expect(getDaysInMonth(2023, null)).toBe(0);
    });
  });
});
