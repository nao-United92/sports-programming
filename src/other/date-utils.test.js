import { formatDate, addDays } from './date-utils.js';

describe('formatDate', () => {
  it('should format date to YYYY-MM-DD by default', () => {
    const date = new Date('2023-01-15T10:30:00Z');
    expect(formatDate(date)).toBe('2023-01-15');
  });

  it('should format date to custom format string', () => {
    const date = new Date('2023-01-15T10:05:08Z');
    expect(formatDate(date, 'YYYY/MM/DD HH:mm:ss')).toBe('2023/01/15 10:05:08');
  });

  it('should handle single digit month/day/hour/minute/second with padding', () => {
    const date = new Date('2023-01-05T01:02:03Z');
    expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-01-05 01:02:03');
  });

  it('should handle invalid date input', () => {
    expect(formatDate('invalid date')).toBe('NaN-NaN-NaN');
    expect(formatDate(null)).toBe('NaN-NaN-NaN');
  });
});

describe('addDays', () => {
  it('should add days to a date', () => {
    const date = new Date('2023-01-15T10:00:00Z');
    const newDate = addDays(date, 5);
    expect(newDate.getDate()).toBe(20);
    expect(newDate.getMonth()).toBe(0); // January
    expect(newDate.getFullYear()).toBe(2023);
  });

  it('should subtract days from a date', () => {
    const date = new Date('2023-01-15T10:00:00Z');
    const newDate = addDays(date, -5);
    expect(newDate.getDate()).toBe(10);
    expect(newDate.getMonth()).toBe(0); // January
    expect(newDate.getFullYear()).toBe(2023);
  });

  it('should handle month and year transitions', () => {
    const date = new Date('2023-01-30T10:00:00Z');
    const newDate = addDays(date, 5); // Should be Feb 4
    expect(newDate.getDate()).toBe(4);
    expect(newDate.getMonth()).toBe(1); // February
    expect(newDate.getFullYear()).toBe(2023);

    const date2 = new Date('2023-12-30T10:00:00Z');
    const newDate2 = addDays(date2, 5); // Should be Jan 4 of next year
    expect(newDate2.getDate()).toBe(4);
    expect(newDate2.getMonth()).toBe(0); // January
    expect(newDate2.getFullYear()).toBe(2024);
  });

  it('should not modify the original date object', () => {
    const originalDate = new Date('2023-01-15T10:00:00Z');
    const dateCopy = new Date(originalDate.getTime());
    addDays(originalDate, 5);
    expect(originalDate).toEqual(dateCopy);
  });

  it('should handle invalid date input', () => {
    const invalidDate = new Date('invalid date');
    const newDate = addDays(invalidDate, 5);
    expect(isNaN(newDate.getTime())).toBe(true);
  });
});
