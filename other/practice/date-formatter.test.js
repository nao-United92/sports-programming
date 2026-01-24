const { formatDate } = require('./date-formatter');

describe('formatDate', () => {
  const date = new Date('2023-10-27T03:24:00');

  it('should format a date with the default format (YYYY-MM-DD)', () => {
    expect(formatDate(date)).toBe('2023-10-27');
  });

  it('should format a date with a custom format (DD/MM/YYYY)', () => {
    expect(formatDate(date, 'DD/MM/YYYY')).toBe('27/10/2023');
  });

  it('should include time in the formatted string', () => {
    expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-10-27 03:24:00');
  });
  
  it('should handle single-digit months and days', () => {
    const newDate = new Date('2024-01-05T08:09:01');
    expect(formatDate(newDate, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-01-05 08:09:01');
  });

  it('should return null for an invalid date', () => {
    const invalidDate = new Date('not a date');
    expect(formatDate(invalidDate)).toBeNull();
  });

  it('should return null for non-Date input', () => {
    expect(formatDate(null)).toBeNull();
    expect(formatDate('2023-10-27')).toBeNull();
    expect(formatDate(1666838640000)).toBeNull();
  });
  
  it('should handle complex formats', () => {
    const anotherDate = new Date(2025, 0, 1, 12, 30, 15);
    expect(formatDate(anotherDate, 'MM-DD-YYYY HH:mm')).toBe('01-01-2025 12:30');
  });
});
