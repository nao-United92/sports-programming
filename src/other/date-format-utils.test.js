const { formatDate } = require('./date-format-utils.js');

describe('formatDate', () => {
  it('should format a date correctly with YYYY-MM-DD', () => {
    const date = new Date(2023, 0, 15); // January 15, 2023
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2023-01-15');
  });

  it('should format a date correctly with HH:mm:ss', () => {
    const date = new Date(2023, 0, 15, 9, 5, 3); // 09:05:03
    expect(formatDate(date, 'HH:mm:ss')).toBe('09:05:03');
  });

  it('should format a date correctly with YYYY/MM/DD HH:mm:ss', () => {
    const date = new Date(2023, 11, 25, 14, 30, 45); // December 25, 2023 14:30:45
    expect(formatDate(date, 'YYYY/MM/DD HH:mm:ss')).toBe('2023/12/25 14:30:45');
  });

  it('should handle single digit month/day/hour/minute/second with leading zeros', () => {
    const date = new Date(2023, 0, 1, 1, 1, 1); // Jan 1, 2023 01:01:01
    expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-01-01 01:01:01');
  });

  it('should include milliseconds if MS is in format', () => {
    const date = new Date(2023, 0, 1, 0, 0, 0, 5); // 5 milliseconds
    expect(formatDate(date, 'ss.MS')).toBe('00.005');
  });

  it('should return empty string for invalid date', () => {
    expect(formatDate(new Date('invalid date'), 'YYYY-MM-DD')).toBe('');
    expect(formatDate(null, 'YYYY-MM-DD')).toBe('');
    expect(formatDate(undefined, 'YYYY-MM-DD')).toBe('');
  });

  it('should handle different format strings', () => {
    const date = new Date(2024, 1, 29, 23, 59, 59); // Feb 29, 2024 23:59:59 (leap year)
    expect(formatDate(date, 'MM-DD-YYYY')).toBe('02-29-2024');
    expect(formatDate(date, 'DD/MM/YYYY')).toBe('29/02/2024');
  });
});
