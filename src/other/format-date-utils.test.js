import { formatDate } from './format-date-utils.js';

describe('formatDate', () => {
  test('should format a date object into a string', () => {
    const date = new Date(2024, 7, 8); // Months are 0-indexed, so 7 is August
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2024-08-08');
  });

  test('should handle different formats', () => {
    const date = new Date(2024, 7, 8);
    expect(formatDate(date, 'MM/DD/YYYY')).toBe('08/08/2024');
  });

  test('should handle single-digit month and day', () => {
    const date = new Date(2024, 0, 1);
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2024-01-01');
  });

  test('should return an empty string for an invalid date', () => {
    expect(formatDate(new Date('invalid'), 'YYYY-MM-DD')).toBe('');
  });

  test('should return an empty string for non-date input', () => {
    expect(formatDate(null, 'YYYY-MM-DD')).toBe('');
    expect(formatDate(undefined, 'YYYY-MM-DD')).toBe('');
    expect(formatDate('2024-08-08', 'YYYY-MM-DD')).toBe('');
  });
});
