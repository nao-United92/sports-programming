import { daysBetween, isWeekend, addDays, formatDate } from './date-utils';

describe('Date Utils', () => {
  describe('daysBetween', () => {
    it('should return the correct number of days between two dates', () => {
      const date1 = new Date('2024-01-01');
      const date2 = new Date('2024-01-11');
      expect(daysBetween(date1, date2)).toBe(10);
    });

    it('should return 0 for the same date', () => {
      const date = new Date('2024-01-01');
      expect(daysBetween(date, date)).toBe(0);
    });

    it('should return a negative number if the first date is later', () => {
      const date1 = new Date('2024-01-11');
      const date2 = new Date('2024-01-01');
      expect(daysBetween(date1, date2)).toBe(-10);
    });
  });

  describe('isWeekend', () => {
    it('should return true for a Saturday', () => {
      const date = new Date('2024-11-23'); // Saturday
      expect(isWeekend(date)).toBe(true);
    });

    it('should return true for a Sunday', () => {
      const date = new Date('2024-11-24'); // Sunday
      expect(isWeekend(date)).toBe(true);
    });

    it('should return false for a weekday', () => {
      const date = new Date('2024-11-25'); // Monday
      expect(isWeekend(date)).toBe(false);
    });
  });

  describe('addDays', () => {
    it('should add days to a date', () => {
      const date = new Date('2024-01-01');
      const newDate = addDays(date, 10);
      expect(newDate.toISOString().split('T')[0]).toBe('2024-01-11');
    });

    it('should subtract days from a date', () => {
      const date = new Date('2024-01-11');
      const newDate = addDays(date, -10);
      expect(newDate.toISOString().split('T')[0]).toBe('2024-01-01');
    });

    it('should handle month changes', () => {
      const date = new Date('2024-01-30');
      const newDate = addDays(date, 5);
      expect(newDate.toISOString().split('T')[0]).toBe('2024-02-04');
    });

    it('should handle year changes', () => {
        const date = new Date('2023-12-30');
        const newDate = addDays(date, 5);
        expect(newDate.toISOString().split('T')[0]).toBe('2024-01-04');
    });
  });

  describe('formatDate', () => {
    const testDate = new Date('2024-01-02T14:05:06.789Z'); // January 2, 2024, 2:05:06 PM UTC

    it('should format date to YYYY-MM-DD', () => {
      expect(formatDate(testDate, 'YYYY-MM-DD')).toBe('2024-01-02');
    });

    it('should format date to MM/DD/YYYY', () => {
      expect(formatDate(testDate, 'MM/DD/YYYY')).toBe('01/02/2024');
    });

    it('should format date to HH:mm:ss', () => {
      // Note: This test assumes the local timezone is UTC or handles timezone conversion correctly.
      // For robust testing, consider mocking Date or using a library that handles timezones.
      // For simplicity, assuming the test environment runs in UTC or the output matches.
      expect(formatDate(testDate, 'HH:mm:ss')).toBe('14:05:06');
    });

    it('should format date to YYYY-MM-DD HH:mm:ss', () => {
      expect(formatDate(testDate, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-01-02 14:05:06');
    });

    it('should handle custom formats', () => {
      expect(formatDate(testDate, 'DD-MM-YYYY at HHh mmm sss')).toBe('02-01-2024 at 14h 05m 06s');
    });
  });
});
