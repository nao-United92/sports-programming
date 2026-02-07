const { isLeapYear } = require('./date-checker');

describe('isLeapYear', () => {
  it('should return true for leap years (number)', () => {
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2020)).toBe(true);
    expect(isLeapYear(2024)).toBe(true);
  });

  it('should return false for common years (number)', () => {
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2021)).toBe(false);
    expect(isLeapYear(2100)).toBe(false);
  });

  it('should return true for leap years (Date object)', () => {
    expect(isLeapYear(new Date(2000, 0, 1))).toBe(true);
    expect(isLeapYear(new Date(2020, 5, 15))).toBe(true);
  });

  it('should return false for common years (Date object)', () => {
    expect(isLeapYear(new Date(1900, 11, 31))).toBe(false);
    expect(isLeapYear(new Date(2021, 2, 10))).toBe(false);
  });

  it('should return false for invalid input types', () => {
    expect(isLeapYear('2020')).toBe(false);
    expect(isLeapYear(null)).toBe(false);
    expect(isLeapYear(undefined)).toBe(false);
    expect(isLeapYear([2024])).toBe(false);
  });
});
