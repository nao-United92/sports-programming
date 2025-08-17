import { getWeekOfMonth, isLastDayOfMonth } from './date-advanced-utils.js';

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