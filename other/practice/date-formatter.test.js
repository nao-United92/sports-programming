const { dateFormat } = require('./date-formatter');

describe('dateFormat', () => {
  it('should format date with default format string', () => {
    const date = new Date(2023, 0, 15, 10, 30, 45, 123); // Jan 15, 2023 10:30:45.123
    expect(dateFormat(date)).toBe('2023-01-15 10:30:45');
  });

  it('should format date with custom format string', () => {
    const date = new Date(2023, 0, 15, 10, 30, 45, 123);
    expect(dateFormat(date, 'MM/DD/YYYY HH:mm:ss.SSS')).toBe('01/15/2023 10:30:45.123');
  });

  it('should handle single digit month/day/hour/minute/second with padding', () => {
    const date = new Date(2023, 1, 5, 5, 5, 5, 5); // Feb 5, 2023 05:05:05.005
    expect(dateFormat(date, 'YYYY-MM-DD HH:mm:ss.SSS')).toBe('2023-02-05 05:05:05.005');
  });

  it('should return empty string for invalid Date object', () => {
    expect(dateFormat(new Date('invalid date'))).toBe('');
  });

  it('should return empty string for non-Date input', () => {
    expect(dateFormat(null)).toBe('');
    expect(dateFormat(undefined)).toBe('');
    expect(dateFormat('2023-01-01')).toBe('');
    expect(dateFormat(12345)).toBe('');
  });
});
