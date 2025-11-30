const { formatDate, daysBetween } = require('./date-time-wizard');

describe('formatDate', () => {
  it('should format a date correctly with YYYY-MM-DD', () => {
    const date = new Date('2024-01-05T14:30:00');
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2024-01-05');
  });

  it('should format a date with time', () => {
    const date = new Date('2023-11-20T08:05:15');
    expect(formatDate(date, 'YYYY/MM/DD HH:mm:ss')).toBe('2023/11/20 08:05:15');
  });

  it('should handle single-digit month and day', () => {
    const date = new Date('2025-07-09T01:02:03');
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2025-07-09');
  });

  it('should return an empty string for an invalid date', () => {
    const date = new Date('invalid-date');
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('');
  });
});

describe('daysBetween', () => {
  it('should return 0 for the same day', () => {
    const date1 = new Date('2024-03-15T10:00:00');
    const date2 = new Date('2024-03-15T20:00:00');
    expect(daysBetween(date1, date2)).toBe(0);
  });

  it('should return 1 for consecutive days', () => {
    const date1 = new Date('2024-03-15');
    const date2 = new Date('2024-03-16');
    expect(daysBetween(date1, date2)).toBe(1);
  });

  it('should calculate the difference across months', () => {
    const date1 = new Date('2024-02-28');
    const date2 = new Date('2024-03-02');
    expect(daysBetween(date1, date2)).toBe(3);
  });

  it('should calculate the difference across years', () => {
    const date1 = new Date('2023-12-30');
    const date2 = new Date('2024-01-02');
    expect(daysBetween(date1, date2)).toBe(3);
  });

  it('should handle leap years', () => {
    const date1 = new Date('2024-02-28');
    const date2 = new Date('2024-03-01');
    expect(daysBetween(date1, date2)).toBe(2); // 29th is included
  });

  it('should return NaN for invalid dates', () => {
    const date1 = new Date('2024-01-01');
    const date2 = new Date('invalid-date');
    expect(daysBetween(date1, date2)).toBeNaN();
  });
});
