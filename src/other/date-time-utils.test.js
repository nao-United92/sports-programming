import {
  formatDate,
  addDays,
  diffDays,
  isToday,
  startOfDay,
  endOfDay,
  formatRelativeTime,
  getCurrentTimestamp,
  isSameDay
} from './date-time-utils';

describe('date-time-utils', () => {
  describe('formatDate', () => {
    it('should format a date with YYYY-MM-DD HH:mm:ss format', () => {
      const date = new Date('2023-01-05T14:30:15');
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-01-05 14:30:15');
    });

    it('should format a date with YYYY/MM/DD format', () => {
      const date = new Date('2023-01-05T14:30:15');
      expect(formatDate(date, 'YYYY/MM/DD')).toBe('2023/01/05');
    });

    it('should handle single digit month/day/hour/minute/second with padding', () => {
      const date = new Date('2023-09-01T01:02:03');
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-09-01 01:02:03');
    });

    it('should return empty string for invalid date', () => {
      expect(formatDate(new Date('invalid'), 'YYYY-MM-DD')).toBe('');
      expect(formatDate(null, 'YYYY-MM-DD')).toBe('');
      expect(formatDate(undefined, 'YYYY-MM-DD')).toBe('');
    });
  });

  describe('isSameDay', () => {
    test('should return true for two dates on the same day', () => {
      const date1 = new Date('2023-01-01T10:00:00');
      const date2 = new Date('2023-01-01T15:30:00');
      expect(isSameDay(date1, date2)).toBe(true);
    });

    test('should return false for two dates on different days', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-01-02');
      expect(isSameDay(date1, date2)).toBe(false);
    });

    test('should return false for two dates on different months', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-02-01');
      expect(isSameDay(date1, date2)).toBe(false);
    });

    test('should return false for two dates on different years', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2024-01-01');
      expect(isSameDay(date1, date2)).toBe(false);
    });

    test('should return false for invalid date inputs', () => {
      expect(isSameDay(new Date('invalid'), new Date())).toBe(false);
      expect(isSameDay(new Date(), new Date('invalid'))).toBe(false);
      expect(isSameDay(null, new Date())).toBe(false);
      expect(isSameDay(new Date(), undefined)).toBe(false);
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
    let _Date;

    beforeAll(() => {
      // Mock Date to control 'today' for testing
      _Date = Date; // Store original Date
      const MOCK_DATE = new _Date('2023-03-15T10:00:00Z');
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
      global.Date = _Date; // Restore original Date
    });

    it('should return true if the date is today', () => {
      const today = new Date(Date.now()); // Use the mocked Date.now()
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
      const date = new Date('2023-01-05T14:30:15.123'); // Use local time string
      const start = startOfDay(date);
      expect(start.getFullYear()).toBe(2023);
      expect(start.getMonth()).toBe(0);
      expect(start.getDate()).toBe(5);
      expect(start.getHours()).toBe(0);
      expect(start.getMinutes()).toBe(0);
      expect(start.getSeconds()).toBe(0);
      expect(start.getMilliseconds()).toBe(0);
    });
  });

  describe('endOfDay', () => {
    it('should return the date at the end of the day', () => {
      const date = new Date('2023-01-05T14:30:15.123'); // Use local time string
      const end = endOfDay(date);
      expect(end.getFullYear()).toBe(2023);
      expect(end.getMonth()).toBe(0);
      expect(end.getDate()).toBe(5);
      expect(end.getHours()).toBe(23);
      expect(end.getMinutes()).toBe(59);
      expect(end.getSeconds()).toBe(59);
      expect(end.getMilliseconds()).toBe(999);
    });
  });

  describe('formatRelativeTime', () => {
    const MOCK_NOW = new Date('2023-10-27T10:00:00Z');

    test('should format to "just now" for very recent times', () => {
      const date = new Date(MOCK_NOW.getTime() - 30 * 1000); // 30 seconds ago
      expect(formatRelativeTime(date, MOCK_NOW)).toBe('just now');
    });

    test('should format to "a minute ago"', () => {
      const date = new Date(MOCK_NOW.getTime() - 60 * 1000); // 1 minute ago
      expect(formatRelativeTime(date, MOCK_NOW)).toBe('a minute ago');
    });

    test('should format to "X minutes ago"', () => {
      const date = new Date(MOCK_NOW.getTime() - 10 * 60 * 1000); // 10 minutes ago
      expect(formatRelativeTime(date, MOCK_NOW)).toBe('10 minutes ago');
    });

    test('should format to "an hour ago"', () => {
      const date = new Date(MOCK_NOW.getTime() - 70 * 60 * 1000); // 70 minutes ago
      expect(formatRelativeTime(date, MOCK_NOW)).toBe('an hour ago');
    });

    test('should format to "X hours ago"', () => {
      const date = new Date(MOCK_NOW.getTime() - 5 * 60 * 60 * 1000); // 5 hours ago
      expect(formatRelativeTime(date, MOCK_NOW)).toBe('5 hours ago');
    });

    test('should format to "yesterday"', () => {
      const date = new Date(MOCK_NOW.getTime() - 25 * 60 * 60 * 1000); // 25 hours ago
      expect(formatRelativeTime(date, MOCK_NOW)).toBe('yesterday');
    });

    test('should format to "X days ago"', () => {
      const date = new Date(MOCK_NOW.getTime() - 10 * 24 * 60 * 60 * 1000); // 10 days ago
      expect(formatRelativeTime(date, MOCK_NOW)).toBe('10 days ago');
    });

    test('should format to "a month ago"', () => {
      const date = new Date(MOCK_NOW.getTime() - 35 * 24 * 60 * 60 * 1000); // 35 days ago
      expect(formatRelativeTime(date, MOCK_NOW)).toBe('a month ago');
    });

    test('should format to "X months ago"', () => {
      const date = new Date(MOCK_NOW.getTime() - 5 * 30.4 * 24 * 60 * 60 * 1000); // 5 months ago
      expect(formatRelativeTime(date, MOCK_NOW)).toBe('5 months ago');
    });

    test('should format to "a year ago"', () => {
      const date = new Date(MOCK_NOW.getTime() - 370 * 24 * 60 * 60 * 1000); // 370 days ago
      expect(formatRelativeTime(date, MOCK_NOW)).toBe('a year ago');
    });

    test('should format to "X years ago"', () => {
      const date = new Date(MOCK_NOW.getTime() - 3 * 365 * 24 * 60 * 60 * 1000); // 3 years ago
      expect(formatRelativeTime(date, MOCK_NOW)).toBe('3 years ago');
    });
  });

  describe('getCurrentTimestamp', () => {
    test('should return the current timestamp', () => {
      const now = Date.now();
      const timestamp = getCurrentTimestamp();
      // Allow for a small difference due to execution time
      expect(timestamp).toBeGreaterThanOrEqual(now);
      expect(timestamp).toBeLessThanOrEqual(now + 10); // Within 10ms
    });
  });
});