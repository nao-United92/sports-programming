import { formatDate, parseDate } from './date-format-utils.js';

describe('Date Formatting Utilities', () => {
  describe('formatDate', () => {
    const date = new Date(2023, 10, 27, 15, 30, 45); // November 27, 2023 15:30:45

    it('should format date in YYYY-MM-DD format', () => {
      expect(formatDate(date, 'YYYY-MM-DD')).toBe('2023-11-27');
    });

    it('should format date in MM/DD/YYYY format', () => {
      expect(formatDate(date, 'MM/DD/YYYY')).toBe('11/27/2023');
    });

    it('should format time in HH:mm:ss format', () => {
      expect(formatDate(date, 'HH:mm:ss')).toBe('15:30:45');
    });

    it('should format full date and time', () => {
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-11-27 15:30:45');
    });

    it('should return empty string for invalid date', () => {
      expect(formatDate(new Date('invalid'), 'YYYY-MM-DD')).toBe('');
      expect(formatDate(null, 'YYYY-MM-DD')).toBe('');
    });
  });

  describe('parseDate', () => {
    it('should parse date in YYYY-MM-DD format', () => {
      const parsed = parseDate('2023-11-27', 'YYYY-MM-DD');
      expect(parsed).toEqual(new Date(2023, 10, 27, 0, 0, 0));
    });

    it('should parse date in MM/DD/YYYY format', () => {
      const parsed = parseDate('11/27/2023', 'MM/DD/YYYY');
      expect(parsed).toEqual(new Date(2023, 10, 27, 0, 0, 0));
    });

    it('should parse time in HH:mm:ss format', () => {
      const parsed = parseDate('15:30:45', 'HH:mm:ss');
      expect(parsed).toEqual(new Date(0, 0, 1, 15, 30, 45)); // Year, month, day default to 0,0,1
    });

    it('should parse full date and time', () => {
      const parsed = parseDate('2023-11-27 15:30:45', 'YYYY-MM-DD HH:mm:ss');
      expect(parsed).toEqual(new Date(2023, 10, 27, 15, 30, 45));
    });

    it('should return null for invalid date string or format mismatch', () => {
      expect(parseDate('2023/11/27', 'YYYY-MM-DD')).toBeNull(); // Format mismatch
      expect(parseDate('invalid-date', 'YYYY-MM-DD')).toBeNull();
      expect(parseDate('2023-99-99', 'YYYY-MM-DD')).toBeNull(); // Invalid date components
    });
  });
});