const { formatDate, isToday } = require('./date-formatter');

describe('Date Formatter', () => {
  const date = new Date('2024-07-26T10:00:00Z');

  describe('formatDate', () => {
    test('should format date to YYYY-MM-DD by default', () => {
      // Adjusting for timezone offset
      const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
      expect(formatDate(localDate)).toBe('2024-07-26');
    });

    test('should format date to specified format', () => {
      const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
      expect(formatDate(localDate, 'DD/MM/YYYY hh:mm:ss')).toBe('26/07/2024 10:00:00');
    });

    test('should return null for invalid date', () => {
      expect(formatDate(new Date('invalid'))).toBeNull();
      expect(formatDate(null)).toBeNull();
      expect(formatDate('2024-07-26')).toBeNull();
    });
  });

  describe('isToday', () => {
    test('should return true for today\'s date', () => {
      expect(isToday(new Date())).toBe(true);
    });

    test('should return false for a date in the past', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      expect(isToday(yesterday)).toBe(false);
    });

    test('should return false for a date in the future', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      expect(isToday(tomorrow)).toBe(false);
    });

    test('should return false for invalid date input', () => {
      expect(isToday(new Date('invalid'))).toBe(false);
      expect(isToday(null)).toBe(false);
    });
  });
});