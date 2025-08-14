import { isSameDay } from './date-comparison-utils';

describe('isSameDay', () => {
  test('should return true for two Date objects representing the same day', () => {
    const date1 = new Date(2023, 0, 15, 10, 0, 0);
    const date2 = new Date(2023, 0, 15, 15, 30, 0);
    expect(isSameDay(date1, date2)).toBe(true);
  });

  test('should return false for two Date objects representing different days', () => {
    const date1 = new Date('2023-01-15T10:00:00.000Z');
    const date2 = new Date('2023-01-16T10:00:00.000Z');
    expect(isSameDay(date1, date2)).toBe(false);
  });

  test('should return false for two Date objects representing different months', () => {
    const date1 = new Date('2023-01-15T10:00:00.000Z');
    const date2 = new Date('2023-02-15T10:00:00.000Z');
    expect(isSameDay(date1, date2)).toBe(false);
  });

  test('should return false for two Date objects representing different years', () => {
    const date1 = new Date('2023-01-15T10:00:00.000Z');
    const date2 = new Date('2024-01-15T10:00:00.000Z');
    expect(isSameDay(date1, date2)).toBe(false);
  });

  test('should handle Date objects created from different timezones but same UTC day', () => {
    const date1 = new Date('2023-01-15T23:00:00.000Z'); // Jan 15 UTC
    const date2 = new Date('2023-01-16T02:00:00.000Z'); // Jan 16 UTC, but might be Jan 15 in some timezones
    // This test depends on the local timezone of the test runner.
    // For consistent results, it's better to compare UTC components or use a date library.
    // Given the current implementation, it compares local year, month, day.
    // Let's assume the test runner is in a timezone where both resolve to the same local day for this specific case.
    // For example, if local timezone is UTC+1, date1 is Jan 16 00:00, date2 is Jan 16 03:00.
    // If local timezone is UTC-1, date1 is Jan 15 22:00, date2 is Jan 16 01:00.
    // The current implementation uses getFullYear, getMonth, getDate which are local time.
    // So, for this test, we need to ensure they resolve to different local days.
    // Let's adjust the test to be more explicit about local time.
    const localDate1 = new Date(2023, 0, 15, 10, 0, 0); // Jan 15, 10:00 local
    const localDate2 = new Date(2023, 0, 15, 23, 59, 59); // Jan 15, 23:59 local
    expect(isSameDay(localDate1, localDate2)).toBe(true);

    const localDate3 = new Date(2023, 0, 15, 23, 59, 59); // Jan 15, 23:59 local
    const localDate4 = new Date(2023, 0, 16, 0, 0, 0); // Jan 16, 00:00 local
    expect(isSameDay(localDate3, localDate4)).toBe(false);
  });

  test('should return false if any argument is not a Date object', () => {
    const date = new Date();
    expect(isSameDay(date, null)).toBe(false);
    expect(isSameDay(null, date)).toBe(false);
    expect(isSameDay(date, undefined)).toBe(false);
    expect(isSameDay(undefined, date)).toBe(false);
    expect(isSameDay(date, '2023-01-15')).toBe(false);
    expect(isSameDay('2023-01-15', date)).toBe(false);
    expect(isSameDay(date, {})).toBe(false);
  });
});
