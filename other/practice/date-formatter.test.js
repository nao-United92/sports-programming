import { formatDate } from './date-formatter.js';

describe('formatDate', () => {
  const date = new Date(2023, 0, 15, 10, 30, 45); // January 15, 2023 10:30:45

  test('should format date to YYYY-MM-DD by default', () => {
    expect(formatDate(date)).toBe('2023-01-15');
  });

  test('should format date to YYYY/MM/DD', () => {
    expect(formatDate(date, 'YYYY/MM/DD')).toBe('2023/01/15');
  });

  test('should format date to DD-MM-YYYY', () => {
    expect(formatDate(date, 'DD-MM-YYYY')).toBe('15-01-2023');
  });

  test('should format date with hours, minutes, and seconds', () => {
    expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-01-15 10:30:45');
  });

  test('should handle single digit month and day correctly', () => {
    const singleDigitDate = new Date(2023, 3, 5, 5, 5, 5); // April 5, 2023 05:05:05
    expect(formatDate(singleDigitDate, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-04-05 05:05:05');
  });

  test('should return empty string for invalid date objects', () => {
    expect(formatDate(new Date('invalid date'))).toBe('');
  });

  test('should return empty string for non-Date inputs', () => {
    expect(formatDate('2023-01-15')).toBe('');
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
  });
});