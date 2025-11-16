import { formatDate, isLeapYear, daysInMonth } from './date-helpers.js';

describe('Date Helpers', () => {
  describe('formatDate', () => {
    test('should format a date correctly', () => {
      const date = new Date(2023, 10, 5); // Month is 0-indexed, so 10 is November
      expect(formatDate(date, 'YYYY-MM-DD')).toBe('2023-11-05');
    });

    test('should handle different formats', () => {
      const date = new Date(2024, 0, 1);
      expect(formatDate(date, 'MM/DD/YYYY')).toBe('01/01/2024');
    });
  });

  describe('isLeapYear', () => {
    test('should return true for leap years', () => {
      expect(isLeapYear(2000)).toBe(true);
      expect(isLeapYear(2020)).toBe(true);
    });

    test('should return false for common years', () => {
      expect(isLeapYear(1900)).toBe(false);
      expect(isLeapYear(2021)).toBe(false);
    });
  });

  describe('daysInMonth', () => {
    test('should return the correct number of days for a given month', () => {
      expect(daysInMonth(2023, 2)).toBe(28); // February 2023
      expect(daysInMonth(2024, 2)).toBe(29); // February 2024 (leap year)
      expect(daysInMonth(2023, 4)).toBe(30); // April 2023
      expect(daysInMonth(2023, 1)).toBe(31); // January 2023
    });
  });
});
