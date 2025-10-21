import { formatDate, timeAgo } from './date-utils';

describe('Date Utilities', () => {
  describe('formatDate', () => {
    it('should format a date correctly with YYYY-MM-DD HH:mm:ss', () => {
      const date = new Date(2023, 0, 15, 10, 30, 45); // Jan 15, 2023 10:30:45
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-01-15 10:30:45');
    });

    it('should format a date correctly with DD/MM/YYYY', () => {
      const date = new Date(2023, 0, 15); // Jan 15, 2023
      expect(formatDate(date, 'DD/MM/YYYY')).toBe('15/01/2023');
    });

    it('should handle single digit month/day/hour/minute/second with padding', () => {
      const date = new Date(2023, 8, 5, 5, 5, 5); // Sep 5, 2023 05:05:05
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-09-05 05:05:05');
    });
  });

  describe('timeAgo', () => {
    const MOCK_NOW = new Date(2025, 9, 14, 12, 0, 0); // Oct 14, 2025 12:00:00

    it('should return "seconds ago" for less than a minute', () => {
      const date = new Date(2025, 9, 14, 11, 59, 30); // 30 seconds ago
      expect(timeAgo(date, MOCK_NOW)).toBe('30 seconds ago');
    });

    it('should return "minutes ago" for less than an hour', () => {
      const date = new Date(2025, 9, 14, 11, 50, 0); // 10 minutes ago
      expect(timeAgo(date, MOCK_NOW)).toBe('10 minutes ago');
    });

    it('should return "hours ago" for less than a day', () => {
      const date = new Date(2025, 9, 14, 10, 0, 0); // 2 hours ago
      expect(timeAgo(date, MOCK_NOW)).toBe('2 hours ago');
    });

    it('should return "days ago" for less than a month', () => {
      const date = new Date(2025, 9, 10, 12, 0, 0); // 4 days ago
      expect(timeAgo(date, MOCK_NOW)).toBe('4 days ago');
    });

    it('should return "months ago" for less than a year', () => {
      const date = new Date(2025, 7, 14, 12, 0, 0); // 2 months ago
      expect(timeAgo(date, MOCK_NOW)).toBe('2 months ago');
    });

    it('should return "years ago" for more than a year', () => {
      const date = new Date(2023, 9, 14, 12, 0, 0); // 2 years ago
      expect(timeAgo(date, MOCK_NOW)).toBe('2 years ago');
    });
  });
});
