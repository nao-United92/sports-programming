
import { formatDate, addDays, isSameDay, getDaysInMonth } from './date-advanced-utils';

describe('formatDate', () => {
  test('should format date correctly', () => {
    const date = new Date(2023, 0, 15, 10, 30, 45); // Jan 15, 2023 10:30:45
    expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-01-15 10:30:45');
    expect(formatDate(date, 'MM/DD/YYYY')).toBe('01/15/2023');
    expect(formatDate(date, 'HH:mm')).toBe('10:30');
  });

  test('should return empty string for invalid date', () => {
    expect(formatDate(new Date('invalid'), 'YYYY-MM-DD')).toBe('');
    expect(formatDate(null, 'YYYY-MM-DD')).toBe('');
  });
});

describe('addDays', () => {
  test('should add days to a date', () => {
    const date = new Date(2023, 0, 15); // Jan 15, 2023
    const newDate = addDays(date, 5);
    expect(newDate.getDate()).toBe(20);
    expect(newDate.getMonth()).toBe(0);
    expect(newDate.getFullYear()).toBe(2023);
  });

  test('should handle month and year rollovers', () => {
    const date = new Date(2023, 0, 30); // Jan 30, 2023
    const newDate = addDays(date, 5);
    expect(newDate.getDate()).toBe(4); // Feb 4, 2023
    expect(newDate.getMonth()).toBe(1);
    expect(newDate.getFullYear()).toBe(2023);

    const date2 = new Date(2023, 11, 25); // Dec 25, 2023
    const newDate2 = addDays(date2, 10);
    expect(newDate2.getDate()).toBe(4); // Jan 4, 2024
    expect(newDate2.getMonth()).toBe(0);
    expect(newDate2.getFullYear()).toBe(2024);
  });

  test('should return invalid date for invalid input', () => {
    expect(isNaN(addDays(new Date('invalid'), 5))).toBe(true);
    expect(isNaN(addDays(new Date(), 'abc'))).toBe(true);
  });
});

describe('isSameDay', () => {
  test('should return true for same day', () => {
    const date1 = new Date(2023, 0, 15, 10, 0, 0);
    const date2 = new Date(2023, 0, 15, 15, 30, 0);
    expect(isSameDay(date1, date2)).toBe(true);
  });

  test('should return false for different days', () => {
    const date1 = new Date(2023, 0, 15);
    const date2 = new Date(2023, 0, 16);
    expect(isSameDay(date1, date2)).toBe(false);
  });

  test('should return false for invalid dates', () => {
    expect(isSameDay(new Date('invalid'), new Date())).toBe(false);
    expect(isSameDay(new Date(), new Date('invalid'))).toBe(false);
  });
});

describe('getDaysInMonth', () => {
  test('should return correct days for common months', () => {
    expect(getDaysInMonth(2023, 1)).toBe(31); // January
    expect(getDaysInMonth(2023, 2)).toBe(28); // February (non-leap)
    expect(getDaysInMonth(2024, 2)).toBe(29); // February (leap)
    expect(getDaysInMonth(2023, 4)).toBe(30); // April
    expect(getDaysInMonth(2023, 12)).toBe(31); // December
  });

  test('should return 0 for invalid month or year', () => {
    expect(getDaysInMonth(2023, 0)).toBe(0);
    expect(getDaysInMonth(2023, 13)).toBe(0);
    expect(getDaysInMonth('abc', 1)).toBe(0);
    expect(getDaysInMonth(2023, 'abc')).toBe(0);
  });
});
