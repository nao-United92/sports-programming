import { isWeekend } from './date-is-weekend-utils.js';

describe('isWeekend', () => {
  test('should return true for a Saturday', () => {
    const date = new Date('2026-01-10T00:00:00'); // Saturday
    expect(isWeekend(date)).toBe(true);
  });

  test('should return true for a Sunday', () => {
    const date = new Date('2026-01-11T00:00:00'); // Sunday
    expect(isWeekend(date)).toBe(true);
  });

  test('should return false for a weekday', () => {
    const date = new Date('2026-01-12T00:00:00'); // Monday
    expect(isWeekend(date)).toBe(false);
  });

  test('should return false for an invalid date or non-Date input', () => {
    expect(isWeekend(new Date('invalid date'))).toBe(false);
    expect(isWeekend('2026-01-10')).toBe(false);
    expect(isWeekend(null)).toBe(false);
    expect(isWeekend(undefined)).toBe(false);
  });
});
