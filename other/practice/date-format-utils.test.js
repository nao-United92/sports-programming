import formatDate from './date-format-utils';

describe('formatDate', () => {
  const date = new Date(2023, 0, 2); // 2023-01-02

  it('should format a date object into YYYY-MM-DD format', () => {
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2023-01-02');
  });

  it('should format a date object into MM/DD/YYYY format', () => {
    expect(formatDate(date, 'MM/DD/YYYY')).toBe('01/02/2023');
  });

  it('should format a date object with different separators', () => {
    expect(formatDate(date, 'YYYY年MM月DD日')).toBe('2023年01月02日');
  });

  it('should handle single-digit month and day', () => {
    const singleDigitDate = new Date(2023, 8, 9); // 2023-09-09
    expect(formatDate(singleDigitDate, 'YYYY-MM-DD')).toBe('2023-09-09');
  });

  it('should return an empty string for invalid date input', () => {
    expect(formatDate(null, 'YYYY-MM-DD')).toBe('');
    expect(formatDate('2023-01-01', 'YYYY-MM-DD')).toBe('');
  });

  it('should return an empty string for invalid format input', () => {
    expect(formatDate(date, null)).toBe('');
    expect(formatDate(date, 123)).toBe('');
  });

  it('should handle formats without replacements', () => {
    expect(formatDate(date, 'No replacements here')).toBe('No replacements here');
  });
});