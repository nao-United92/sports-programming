const { formatDate, isLeapYear, daysInMonth } = require('./date-enhancements.js');

describe('Date Enhancements', () => {
  describe('formatDate', () => {
    test('should format a date into YYYY-MM-DD format', () => {
      const date = new Date(2023, 10, 24); // Month is 0-indexed, so 10 is November
      expect(formatDate(date)).toBe('2023-11-24');
    });

    test('should pad month and day with a leading zero', () => {
      const date = new Date(2023, 0, 1); // January 1st
      expect(formatDate(date)).toBe('2023-01-01');
    });
  });

  describe('isLeapYear', () => {
    test('should return true for a leap year divisible by 4 but not 100', () => {
      expect(isLeapYear(2024)).toBe(true);
    });

    test('should return false for a year divisible by 100 but not 400', () => {
      expect(isLeapYear(1900)).toBe(false);
    });

    test('should return true for a year divisible by 400', () => {
      expect(isLeapYear(2000)).toBe(true);
    });

    test('should return false for a non-leap year', () => {
      expect(isLeapYear(2023)).toBe(false);
    });
  });

  describe('daysInMonth', () => {
    test('should return the correct number of days for a 31-day month', () => {
      expect(daysInMonth(2023, 1)).toBe(31); // January
    });

    test('should return the correct number of days for a 30-day month', () => {
      expect(daysInMonth(2023, 4)).toBe(30); // April
    });

    test('should return 29 days for February in a leap year', () => {
      expect(daysInMonth(2024, 2)).toBe(29); // February
    });

    test('should return 28 days for February in a non-leap year', () => {
      expect(daysInMonth(2023, 2)).toBe(28); // February
    });
  });
});
