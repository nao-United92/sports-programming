import { isWeekday } from './date-utils.js';

describe('isWeekday', () => {
  test('should return true for a weekday (Monday)', () => {
    const monday = new Date('2025-11-03T12:00:00'); // A Monday
    expect(isWeekday(monday)).toBe(true);
  });

  test('should return true for a weekday (Friday)', () => {
    const friday = new Date('2025-11-07T12:00:00'); // A Friday
    expect(isWeekday(friday)).toBe(true);
  });

  test('should return false for a weekend (Saturday)', () => {
    const saturday = new Date('2025-11-08T12:00:00'); // A Saturday
    expect(isWeekday(saturday)).toBe(false);
  });

  test('should return false for a weekend (Sunday)', () => {
    const sunday = new Date('2025-11-09T12:00:00'); // A Sunday
    expect(isWeekday(sunday)).toBe(false);
  });

  test('should use the current date if no date is provided', () => {
    // This just checks if it runs without error and returns a boolean.
    expect(typeof isWeekday()).toBe('boolean');
  });
});