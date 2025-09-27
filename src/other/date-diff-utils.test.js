import { daysBetween } from './date-diff-utils';

describe('daysBetween', () => {
  test('should return the number of days between two dates', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-10');
    expect(daysBetween(date1, date2)).toBe(9);
  });

  test('should return a negative number if the first date is after the second', () => {
    const date1 = new Date('2023-01-10');
    const date2 = new Date('2023-01-01');
    expect(daysBetween(date1, date2)).toBe(-9);
  });

  test('should return 0 for the same day', () => {
    const date1 = new Date('2023-01-01T10:00:00');
    const date2 = new Date('2023-01-01T20:00:00');
    expect(daysBetween(date1, date2)).toBe(0);
  });

  test('should handle leap years', () => {
    const date1 = new Date('2024-02-28');
    const date2 = new Date('2024-03-01');
    expect(daysBetween(date1, date2)).toBe(2);
  });
});
