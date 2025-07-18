import { formatDate, isSameDay } from './date-utils.js';

describe('date-utils', () => {
  describe('formatDate', () => {
    test('should format date correctly for YYYY-MM-DD', () => {
      const date = new Date(2023, 0, 15, 10, 30, 45);
      expect(formatDate(date, 'YYYY-MM-DD')).toBe('2023-01-15');
    });

    test('should format date correctly for MM/DD/YYYY HH:mm:ss', () => {
      const date = new Date(2023, 0, 15, 10, 30, 45);
      expect(formatDate(date, 'MM/DD/YYYY HH:mm:ss')).toBe('01/15/2023 10:30:45');
    });

    test('should handle single digit month/day/hour/minute/second with padding', () => {
      const date = new Date(2023, 8, 5, 5, 5, 5);
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-09-05 05:05:05');
    });

    test('should return empty string for invalid date', () => {
      expect(formatDate(new Date('invalid'), 'YYYY-MM-DD')).toBe('');
      expect(formatDate(null, 'YYYY-MM-DD')).toBe('');
      expect(formatDate(undefined, 'YYYY-MM-DD')).toBe('');
    });
  });

  describe('isSameDay', () => {
    test('should return true for dates on the same day', () => {
      const date1 = new Date(2023, 0, 15, 10, 0, 0);
      const date2 = new Date(2023, 0, 15, 15, 30, 0);
      expect(isSameDay(date1, date2)).toBe(true);
    });

    test('should return false for dates on different days', () => {
      const date1 = new Date(2023, 0, 15);
      const date2 = new Date(2023, 0, 16);
      expect(isSameDay(date1, date2)).toBe(false);
    });

    test('should return false for dates in different months', () => {
      const date1 = new Date(2023, 0, 15);
      const date2 = new Date(2023, 1, 15);
      expect(isSameDay(date1, date2)).toBe(false);
    });

    test('should return false for dates in different years', () => {
      const date1 = new Date(2023, 0, 15);
      const date2 = new Date(2024, 0, 15);
      expect(isSameDay(date1, date2)).toBe(false);
    });

    test('should return false for invalid dates', () => {
      expect(isSameDay(new Date('invalid'), new Date())).toBe(false);
      expect(isSameDay(new Date(), new Date('invalid'))).toBe(false);
      expect(isSameDay(null, new Date())).toBe(false);
      expect(isSameDay(new Date(), undefined)).toBe(false);
    });
  });
});
