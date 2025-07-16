import { formatDate, addDays, isSameDay, daysBetween, isPast, startOfMonth, endOfMonth, getDaysInMonth, isLeapYear } from './date-utils.js';

describe('date-utils', () => {
  it('should format a date', () => {
    const date = new Date(2024, 0, 20, 10, 30, 45);
    expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-01-20 10:30:45');
  });

  it('should add days to a date', () => {
    const date = new Date(2024, 0, 20);
    const newDate = addDays(date, 5);
    expect(newDate.getDate()).toBe(25);
  });

  it('should check if two dates are the same day', () => {
    const date1 = new Date(2024, 0, 20, 10, 0, 0);
    const date2 = new Date(2024, 0, 20, 15, 30, 0);
    const date3 = new Date(2024, 0, 21, 10, 0, 0);
    expect(isSameDay(date1, date2)).toBe(true);
    expect(isSameDay(date1, date3)).toBe(false);
  });

  it('should calculate the days between two dates', () => {
    const date1 = new Date(2024, 0, 20);
    const date2 = new Date(2024, 0, 25);
    expect(daysBetween(date1, date2)).toBe(5);
  });

  describe('isPast', () => {
    it('should return true for a date in the past', () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);
      expect(isPast(pastDate)).toBe(true);
    });

    it('should return false for a date in the future', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      expect(isPast(futureDate)).toBe(false);
    });

    it("should return false for today's date", () => {
      const today = new Date();
      expect(isPast(today)).toBe(false);
    });
  });

  describe('startOfMonth', () => {
    it('should return the first day of the month', () => {
      const date = new Date(2024, 7, 15); // August 15, 2024
      const expected = new Date(2024, 7, 1, 0, 0, 0, 0);
      expect(startOfMonth(date)).toEqual(expected);
    });
  });

  describe('endOfMonth', () => {
    it('should return the last day of the month', () => {
      const date = new Date(2024, 0, 15); // January 15, 2024
      const expected = new Date(2024, 0, 31, 23, 59, 59, 999);
      expect(endOfMonth(date)).toEqual(expected);
    });

    it('should handle February in a leap year', () => {
      const date = new Date(2024, 1, 15); // February 15, 2024 (leap year)
      const expected = new Date(2024, 1, 29, 23, 59, 59, 999);
      expect(endOfMonth(date)).toEqual(expected);
    });

    it('should handle February in a non-leap year', () => {
      const date = new Date(2023, 1, 15); // February 15, 2023 (non-leap year)
      const expected = new Date(2023, 1, 28, 23, 59, 59, 999);
      expect(endOfMonth(date)).toEqual(expected);
    });
  });

  describe('getDaysInMonth', () => {
    it('should return the correct number of days for a given month and year', () => {
      expect(getDaysInMonth(2024, 0)).toBe(31); // January
      expect(getDaysInMonth(2024, 1)).toBe(29); // February (leap year)
      expect(getDaysInMonth(2023, 1)).toBe(28); // February (non-leap year)
      expect(getDaysInMonth(2024, 3)).toBe(30); // April
    });
  });

  describe('isLeapYear', () => {
    it('should return true for leap years', () => {
      expect(isLeapYear(2000)).toBe(true);
      expect(isLeapYear(2004)).toBe(true);
      expect(isLeapYear(2024)).toBe(true);
    });

    it('should return false for non-leap years', () => {
      expect(isLeapYear(1900)).toBe(false);
      expect(isLeapYear(2003)).toBe(false);
      expect(isLeapYear(2023)).toBe(false);
    });
  });
});