import { getDateDifference } from './date-get-difference-utils.js';

describe('getDateDifference', () => {
  test('should calculate the difference in days, hours, and minutes correctly', () => {
    const date1 = new Date('2023-01-01T10:00:00Z');
    const date2 = new Date('2023-01-03T12:30:00Z'); // 2 days, 2 hours, 30 minutes difference
    expect(getDateDifference(date1, date2)).toEqual({ days: 2, hours: 2, minutes: 30 });
  });

  test('should handle dates in reverse order', () => {
    const date1 = new Date('2023-01-03T12:30:00Z');
    const date2 = new Date('2023-01-01T10:00:00Z');
    expect(getDateDifference(date1, date2)).toEqual({ days: 2, hours: 2, minutes: 30 });
  });

  test('should handle same dates', () => {
    const date1 = new Date('2023-01-01T10:00:00Z');
    const date2 = new Date('2023-01-01T10:00:00Z');
    expect(getDateDifference(date1, date2)).toEqual({ days: 0, hours: 0, minutes: 0 });
  });

  test('should handle only minute difference', () => {
    const date1 = new Date('2023-01-01T10:00:00Z');
    const date2 = new Date('2023-01-01T10:15:00Z');
    expect(getDateDifference(date1, date2)).toEqual({ days: 0, hours: 0, minutes: 15 });
  });

  test('should handle only hour difference', () => {
    const date1 = new Date('2023-01-01T10:00:00Z');
    const date2 = new Date('2023-01-01T12:00:00Z');
    expect(getDateDifference(date1, date2)).toEqual({ days: 0, hours: 2, minutes: 0 });
  });

  test('should return null for invalid date inputs', () => {
    expect(getDateDifference(new Date('invalid'), new Date())).toBeNull();
    expect(getDateDifference(new Date(), new Date('invalid'))).toBeNull();
    expect(getDateDifference('not a date', new Date())).toBeNull();
    expect(getDateDifference(new Date(), null)).toBeNull();
  });
});
