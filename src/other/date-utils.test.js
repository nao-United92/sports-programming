import { formatDate, addDays, isSameDay, daysBetween } from './date-utils.js';

describe('date-utils', () => {
  it('should format a date', () => {
    const date = new Date(2024, 0, 20, 10, 30, 45);
    expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-01-20 10:30:45');
  });

  it('should add days to a date', () => {
    const date = new Date(2024, 0, 20);
    const newDate = addDays(date, 5);
    expect(newDate.getDate()).toBe(25);
  });

  it('should check if two dates are the same day', () => {
    const date1 = new Date(2024, 0, 20, 10, 0, 0);
    const date2 = new Date(2024, 0, 20, 15, 30, 0);
    const date3 = new Date(2024, 0, 21, 10, 0, 0);
    expect(isSameDay(date1, date2)).toBe(true);
    expect(isSameDay(date1, date3)).toBe(false);
  });

  it('should calculate the days between two dates', () => {
    const date1 = new Date(2024, 0, 20);
    const date2 = new Date(2024, 0, 25);
    expect(daysBetween(date1, date2)).toBe(5);
  });
});