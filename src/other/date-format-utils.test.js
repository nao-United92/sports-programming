import { formatDate } from './date-format-utils';

describe('formatDate', () => {
  const date = new Date('2023-10-27T05:08:09.123Z');

  test('should format date to YYYY-MM-DD', () => {
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2023-10-27');
  });

  test('should format date to YYYY/MM/DD hh:mm:ss', () => {
    expect(formatDate(date, 'YYYY/MM/DD hh:mm:ss')).toBe('2023/10/27 05:08:09');
  });

  test('should handle single digit month and day', () => {
    const earlyDate = new Date('2023-01-02T03:04:05.006Z');
    expect(formatDate(earlyDate, 'YYYY-MM-DD hh:mm:ss')).toBe('2023-01-02 03:04:05');
  });

  test('should format with milliseconds', () => {
    expect(formatDate(date, 'YYYY-MM-DD hh:mm:ss.S')).toBe('2023-10-27 05:08:09.123');
  });

  test('should format year with two digits', () => {
    expect(formatDate(date, 'YY-MM-DD')).toBe('23-10-27');
  });
});