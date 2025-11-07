import { formatDate } from './date-format-utils.js';

describe('formatDate', () => {
  const testDate = new Date(2023, 0, 15, 14, 35, 8, 123); // Jan 15, 2023, 14:35:08.123

  it('should format date to YYYY-MM-DD', () => {
    expect(formatDate(testDate, 'YYYY-MM-DD')).toBe('2023-01-15');
  });

  it('should format time to HH:mm:ss', () => {
    expect(formatDate(testDate, 'HH:mm:ss')).toBe('14:35:08');
  });

  it('should format date and time with milliseconds', () => {
    expect(formatDate(testDate, 'YYYY-MM-DD HH:mm:ss.SSS')).toBe('2023-01-15 14:35:08.123');
  });

  it('should handle custom formats', () => {
    expect(formatDate(testDate, 'DD/MM/YYYY at HH:mm')).toBe('15/01/2023 at 14:35');
  });

  it('should return empty string for invalid date object', () => {
    expect(formatDate(new Date('invalid date'), 'YYYY-MM-DD')).toBe('');
  });

  it('should return empty string for null input', () => {
    expect(formatDate(null, 'YYYY-MM-DD')).toBe('');
  });

  it('should return empty string for undefined input', () => {
    expect(formatDate(undefined, 'YYYY-MM-DD')).toBe('');
  });

  it('should return empty string for non-Date object input', () => {
    expect(formatDate('2023-01-15', 'YYYY-MM-DD')).toBe('');
    expect(formatDate({}, 'YYYY-MM-DD')).toBe('');
  });
});
