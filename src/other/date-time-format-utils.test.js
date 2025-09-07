import { formatDate, formatTime } from './date-time-format-utils.js';

describe('Date Time Format Utilities', () => {
  const testDate = new Date(2023, 0, 20, 15, 30, 45); // Jan 20, 2023 15:30:45

  describe('formatDate', () => {
    it('should format date correctly with YYYY-MM-DD', () => {
      expect(formatDate(testDate, 'YYYY-MM-DD')).toBe('2023-01-20');
    });

    it('should format date and time correctly with YYYY-MM-DD HH:mm:ss', () => {
      expect(formatDate(testDate, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-01-20 15:30:45');
    });

    it('should handle custom separators', () => {
      expect(formatDate(testDate, 'YYYY/MM/DD')).toBe('2023/01/20');
    });
  });

  describe('formatTime', () => {
    it('should format time correctly with HH:mm:ss', () => {
      expect(formatTime(testDate, 'HH:mm:ss')).toBe('15:30:45');
    });

    it('should format time correctly with HH-mm', () => {
      expect(formatTime(testDate, 'HH-mm')).toBe('15-30');
    });
  });
});
