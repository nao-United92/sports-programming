
import { formatDate } from './date-format-utils';

describe('formatDate', () => {
  test('should format date correctly with YYYY-MM-DD format', () => {
    const date = new Date('2023-01-01T10:20:30');
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2023-01-01');
  });

  test('should format date correctly with HH:mm:ss format', () => {
    const date = new Date('2023-01-01T10:20:30');
    expect(formatDate(date, 'HH:mm:ss')).toBe('10:20:30');
  });

  test('should format date correctly with full format', () => {
    const date = new Date('2023-11-25T05:07:09');
    expect(formatDate(date, 'YYYY/MM/DD HH:mm:ss')).toBe('2023/11/25 05:07:09');
  });

  test('should handle single digit month, day, hour, minute, second with padding', () => {
    const date = new Date('2023-01-01T01:02:03');
    expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-01-01 01:02:03');
  });

  test('should handle different dates correctly', () => {
    const date = new Date('2024-02-29T23:59:59'); // Leap year
    expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-02-29 23:59:59');
  });

  test('should return empty string for invalid date input', () => {
    expect(formatDate(new Date('invalid date'), 'YYYY-MM-DD')).toBe('');
    expect(formatDate(null, 'YYYY-MM-DD')).toBe('');
    expect(formatDate(undefined, 'YYYY-MM-DD')).toBe('');
  });

  test('should return empty string for invalid format input', () => {
    const date = new Date();
    expect(formatDate(date, null)).toBe('');
    expect(formatDate(date, undefined)).toBe('');
    expect(formatDate(date, 123)).toBe('');
  });

  test('should handle custom separators', () => {
    const date = new Date('2023-01-01T10:20:30');
    expect(formatDate(date, 'YYYY.MM.DD_HH-mm-ss')).toBe('2023.01.01_10-20-30');
  });
});
