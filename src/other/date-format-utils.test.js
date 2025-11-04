import { formatDateTime } from './date-format-utils.js';

describe('formatDateTime', () => {
  test('should format the date correctly', () => {
    const date = new Date('2023-10-27T10:30:05Z');
    // Adjust for timezone offset if running in a different timezone
    const expectedYear = date.getFullYear();
    const expectedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
    const expectedDay = date.getDate().toString().padStart(2, '0');
    const expectedHours = date.getHours().toString().padStart(2, '0');
    const expectedMinutes = date.getMinutes().toString().padStart(2, '0');
    const expectedSeconds = date.getSeconds().toString().padStart(2, '0');

    const expected = `${expectedYear}-${expectedMonth}-${expectedDay} ${expectedHours}:${minutes}:${seconds}`;
    expect(formatDateTime(date)).toBe(expected);
  });

  test('should return an empty string for an invalid date', () => {
    const invalidDate = new Date('not a date');
    expect(formatDateTime(invalidDate)).toBe('');
  });

  test('should handle single-digit month, day, hour, minute, and second', () => {
    const date = new Date(2024, 0, 1, 2, 3, 4); // Month is 0-indexed
    expect(formatDateTime(date)).toBe('2024-01-01 02:03:04');
  });
});