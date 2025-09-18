import { getWeekOfMonth, isLastDayOfMonth, calculateBusinessDays } from './date-advanced-utils.js';

describe('getWeekOfMonth', () => {
  test('should return the correct week of the month', () => {
    expect(getWeekOfMonth(new Date('2024-01-01'))).toBe(1);
    expect(getWeekOfMonth(new Date('2024-01-08'))).toBe(2);
    expect(getWeekOfMonth(new Date('2024-01-31'))).toBe(5);
  });

  test('should return NaN for invalid dates', () => {
    expect(getWeekOfMonth(new Date('invalid date'))).toBeNaN();
  });
});

describe('isLastDayOfMonth', () => {
  test('should return true if the date is the last day of the month', () => {
    expect(isLastDayOfMonth(new Date('2024-01-31'))).toBe(true);
    expect(isLastDayOfMonth(new Date('2024-02-29'))).toBe(true); // Leap year
  });

  test('should return false if the date is not the last day of the month', () => {
    expect(isLastDayOfMonth(new Date('2024-01-30'))).toBe(false);
    expect(isLastDayOfMonth(new Date('2023-02-28'))).toBe(true);
  });

  test('should return false for invalid dates', () => {
    expect(isLastDayOfMonth(new Date('invalid date'))).toBe(false);
  });
});

describe('calculateBusinessDays', () => {
  test('should return 5 business days for a full week', () => {
    const startDate = new Date('2024-07-22'); // Monday
    const endDate = new Date('2024-07-26'); // Friday
    expect(calculateBusinessDays(startDate, endDate)).toBe(5);
  });

  test('should return 0 for a weekend', () => {
    const startDate = new Date('2024-07-27'); // Saturday
    const endDate = new Date('2024-07-28'); // Sunday
    expect(calculateBusinessDays(startDate, endDate)).toBe(0);
  });

  test('should handle date range that spans across a weekend', () => {
    const startDate = new Date('2024-07-25'); // Thursday
    const endDate = new Date('2024-07-29'); // Monday
    expect(calculateBusinessDays(startDate, endDate)).toBe(3);
  });

  test('should return 0 for invalid dates', () => {
    expect(calculateBusinessDays(new Date('invalid date'), new Date())).toBe(0);
    expect(calculateBusinessDays(new Date(), new Date('invalid date'))).toBe(0);
  });
});