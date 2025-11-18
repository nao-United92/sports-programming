import { daysBetween, isWeekend, addDays } from './date-utils';

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
});
