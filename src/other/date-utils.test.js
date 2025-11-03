import { isWeekday, isWeekend, formatDate } from './date-utils.js';

describe('isWeekday', () => {
  test('should return true for weekdays', () => {
    // Monday to Friday
    expect(isWeekday(new Date('2024-07-29'))).toBe(true); // Monday
    expect(isWeekday(new Date('2024-07-30'))).toBe(true); // Tuesday
    expect(isWeekday(new Date('2024-07-31'))).toBe(true); // Wednesday
    expect(isWeekday(new Date('2024-08-01'))).toBe(true); // Thursday
    expect(isWeekday(new Date('2024-08-02'))).toBe(true); // Friday
  });

  test('should return false for weekends', () => {
    expect(isWeekday(new Date('2024-07-27'))).toBe(false); // Saturday
    expect(isWeekday(new Date('2024-07-28'))).toBe(false); // Sunday
  });

  test('should return false for invalid date inputs', () => {
    expect(isWeekday(null)).toBe(false);
    expect(isWeekday(undefined)).toBe(false);
    expect(isWeekday('2024-07-29')).toBe(false);
    expect(isWeekday(123)).toBe(false);
  });
});

describe('isWeekend', () => {
  test('should return true for weekends', () => {
    expect(isWeekend(new Date('2024-07-27'))).toBe(true); // Saturday
    expect(isWeekend(new Date('2024-07-28'))).toBe(true); // Sunday
  });

  test('should return false for weekdays', () => {
    expect(isWeekend(new Date('2024-07-29'))).toBe(false); // Monday
    expect(isWeekend(new Date('2024-07-30'))).toBe(false); // Tuesday
    expect(isWeekend(new Date('2024-07-31'))).toBe(false); // Wednesday
    expect(isWeekend(new Date('2024-08-01'))).toBe(false); // Thursday
    expect(isWeekend(new Date('2024-08-02'))).toBe(false); // Friday
  });

  test('should return false for invalid date inputs', () => {
    expect(isWeekend(null)).toBe(false);
    expect(isWeekend(undefined)).toBe(false);
    expect(isWeekend('2024-07-27')).toBe(false);
    expect(isWeekend({})).toBe(false);
  });
});

describe('formatDate', () => {
  test('should format the date to YYYY-MM-DD', () => {
    const date = new Date('2024-07-27T10:00:00Z');
    // Note: getDate() is based on local time. Let's use UTC dates for consistency in tests.
    const utcDate = new Date(Date.UTC(2024, 6, 27)); // Month is 0-indexed
    expect(formatDate(utcDate)).toBe('2024-07-27');
  });

  test('should correctly format dates with single-digit month and day', () => {
    const date = new Date(Date.UTC(2024, 0, 1)); // Jan 1, 2024
    expect(formatDate(date)).toBe('2024-01-01');
  });

  test('should return an empty string for invalid date inputs', () => {
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
    expect(formatDate('2024-07-27')).toBe('');
    expect(formatDate(new Date('invalid date'))).toBe('');
  });
});
