const { formatDate } = require('./date-format-utils');

describe('formatDate', () => {
  const date = new Date(2023, 0, 15, 14, 35, 8); // Jan 15, 2023 14:35:08

  test('should format date with default format (YYYY-MM-DD hh:mm:ss)', () => {
    expect(formatDate(date)).toBe('2023-01-15 14:35:08');
  });

  test('should format date with custom format YYYY/MM/DD', () => {
    expect(formatDate(date, 'YYYY/MM/DD')).toBe('2023/01/15');
  });

  test('should format date with custom format DD-M-YY', () => {
    expect(formatDate(date, 'DD-M-YY')).toBe('15-1-23');
  });

  test('should format time with custom format h:m:s', () => {
    expect(formatDate(date, 'h:m:s')).toBe('14:35:8');
  });

  test('should format with full custom format', () => {
    expect(formatDate(date, 'YYYY年MM月DD日 hh時mm分ss秒')).toBe('2023年01月15日 14時35分08秒');
  });

  test('should handle single digit month/day/hour/minute/second without padding', () => {
    const singleDigitDate = new Date(2023, 1, 5, 2, 3, 4); // Feb 5, 2023 02:03:04
    expect(formatDate(singleDigitDate, 'YYYY-M-D h:m:s')).toBe('2023-2-5 2:3:4');
  });

  test('should handle invalid date object', () => {
    expect(formatDate(new Date('invalid date'))).toBe('Invalid Date');
  });

  test('should handle non-Date object', () => {
    expect(formatDate('not a date')).toBe('Invalid Date');
    expect(formatDate(null)).toBe('Invalid Date');
    expect(formatDate(undefined)).toBe('Invalid Date');
  });

  test('should handle empty format string', () => {
    expect(formatDate(date, '')).toBe('');
  });
});
