
import { dayOfYear } from './date-day-of-year-utils';

describe('dayOfYear', () => {
  test('should return the correct day number for a given date', () => {
    expect(dayOfYear(new Date('2024-01-01'))).toBe(1);
  });

  test('should return 366 for the last day of a leap year', () => {
    expect(dayOfYear(new Date('2024-12-31'))).toBe(366);
  });

  test('should return 365 for the last day of a common year', () => {
    expect(dayOfYear(new Date('2025-12-31'))).toBe(365);
  });

  test('should handle mid-year dates correctly', () => {
    expect(dayOfYear(new Date('2024-03-01'))).toBe(61); // Leap year
    expect(dayOfYear(new Date('2025-03-01'))).toBe(60); // Common year
  });

  test('should return NaN for invalid date inputs', () => {
    expect(dayOfYear(new Date('invalid date'))).toBeNaN();
    expect(dayOfYear(null)).toBeNaN();
    expect(dayOfYear(undefined)).toBeNaN();
  });
});
