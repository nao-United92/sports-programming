const { daysBetween } = require('./date-days-between-utils');

describe('daysBetween', () => {
  it('should return 0 for the same date', () => {
    expect(daysBetween('2023-01-01', '2023-01-01')).toBe(0);
  });

  it('should return 1 for consecutive dates', () => {
    expect(daysBetween('2023-01-01', '2023-01-02')).toBe(1);
  });

  it('should return the correct number of days for a longer period', () => {
    expect(daysBetween('2023-01-01', '2023-01-31')).toBe(30);
  });

  it('should handle dates in reverse order', () => {
    expect(daysBetween('2023-01-31', '2023-01-01')).toBe(30);
  });

  it('should handle month changes', () => {
    expect(daysBetween('2023-02-25', '2023-03-05')).toBe(8);
  });

  it('should handle year changes', () => {
    expect(daysBetween('2022-12-30', '2023-01-02')).toBe(3);
  });

  it('should correctly handle leap years', () => {
    // 2024 is a leap year, so Feb has 29 days.
    expect(daysBetween('2024-02-28', '2024-03-01')).toBe(2);
  });

  it('should handle non-leap years correctly', () => {
    // 2023 is not a leap year, so Feb has 28 days.
    expect(daysBetween('2023-02-28', '2023-03-01')).toBe(1);
  });

  it('should ignore time of day and return 0 for the same calendar day', () => {
    expect(daysBetween('2023-01-01T10:00:00Z', '2023-01-01T23:00:00Z')).toBe(0);
  });

  it('should return 1 day difference even if the time difference is less than 24 hours', () => {
    expect(daysBetween('2023-01-01T23:00:00Z', '2023-01-02T01:00:00Z')).toBe(1);
  });
});
