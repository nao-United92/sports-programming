
import {
  formatDateCustom,
  addDays,
  diffDays,
  isToday,
  startOfDay,
  endOfDay,
} from './date-time-utils';

describe('date-time-utils', () => {
  describe('formatDateCustom', () => {
    it('should format a date with YYYY-MM-DD HH:mm:ss format', () => {
      const date = new Date('2023-01-05T14:30:15');
      expect(formatDateCustom(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-01-05 14:30:15');
    });

    it('should format a date with YYYY/MM/DD format', () => {
      const date = new Date('2023-01-05T14:30:15');
      expect(formatDateCustom(date, 'YYYY/MM/DD')).toBe('2023/01/05');
    });

    it('should handle single digit month/day/hour/minute/second with padding', () => {
      const date = new Date('2023-09-01T01:02:03');
      expect(formatDateCustom(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-09-01 01:02:03');
    });

    it('should return empty string for invalid date', () => {
      expect(formatDateCustom(new Date('invalid'), 'YYYY-MM-DD')).toBe('');
      expect(formatDateCustom(null, 'YYYY-MM-DD')).toBe('');
      expect(formatDateCustom(undefined, 'YYYY-MM-DD')).toBe('');
    });
  });

  describe('addDays', () => {
    it('should add days to a date', () => {
      const date = new Date('2023-01-01');
      const newDate = addDays(date, 5);
      expect(newDate.getDate()).toBe(6);
      expect(newDate.getMonth()).toBe(0); // January
      expect(newDate.getFullYear()).toBe(2023);
    });

    it('should handle adding days across month boundaries', () => {
      const date = new Date('2023-01-30');
      const newDate = addDays(date, 5);
      expect(newDate.getDate()).toBe(4);
      expect(newDate.getMonth()).toBe(1); // February
      expect(newDate.getFullYear()).toBe(2023);
    });

    it('should handle adding negative days', () => {
      const date = new Date('2023-01-05');
      const newDate = addDays(date, -3);
      expect(newDate.getDate()).toBe(2);
    });
  });

  describe('diffDays', () => {
    it('should calculate the difference in days between two dates', () => {
      const date1 = new Date('2023-01-10');
      const date2 = new Date('2023-01-05');
      expect(diffDays(date1, date2)).toBe(5);
    });

    it('should return negative difference if first date is earlier', () => {
      const date1 = new Date('2023-01-05');
      const date2 = new Date('2023-01-10');
      expect(diffDays(date1, date2)).toBe(-5);
    });

    it('should return 0 for the same date', () => {
      const date1 = new Date('2023-01-05');
      const date2 = new Date('2023-01-05');
      expect(diffDays(date1, date2)).toBe(0);
    });

    it('should handle dates across year boundaries', () => {
      const date1 = new Date('2024-01-01');
      const date2 = new Date('2023-12-31');
      expect(diffDays(date1, date2)).toBe(1);
    });
  });

  describe('isToday', () => {
    let mockDate;

    beforeAll(() => {
      // Mock Date to control 'today' for testing
      const MOCK_DATE = new Date('2023-03-15T10:00:00Z');
      const _Date = Date;
      global.Date = jest.fn((dateString) => {
        if (dateString) {
          return new _Date(dateString);
        }
        return MOCK_DATE;
      });
      global.Date.now = jest.fn(() => MOCK_DATE.getTime());
      global.Date.prototype = _Date.prototype;
    });

    afterAll(() => {
      global.Date = Date; // Restore original Date
    });

    it('should return true if the date is today', () => {
      const today = new Date('2023-03-15T15:00:00Z'); // Same day as mock
      expect(isToday(today)).toBe(true);
    });

    it('should return false if the date is not today (different day)', () => {
      const yesterday = new Date('2023-03-14T10:00:00Z');
      expect(isToday(yesterday)).toBe(false);
    });

    it('should return false if the date is not today (different month)', () => {
      const nextMonth = new Date('2023-04-15T10:00:00Z');
      expect(isToday(nextMonth)).toBe(false);
    });

    it('should return false if the date is not today (different year)', () => {
      const nextYear = new Date('2024-03-15T10:00:00Z');
      expect(isToday(nextYear)).toBe(false);
    });
  });

  describe('startOfDay', () => {
    it('should return the date at the beginning of the day', () => {
      const date = new Date('2023-01-05T14:30:15.123Z');
      const start = startOfDay(date);
      expect(start.toISOString()).toBe('2023-01-05T00:00:00.000Z');
    });
  });

  describe('endOfDay', () => {
    it('should return the date at the end of the day', () => {
      const date = new Date('2023-01-05T14:30:15.123Z');
      const end = endOfDay(date);
      expect(end.toISOString()).toBe('2023-01-05T23:59:59.999Z');
    });
  });
});
