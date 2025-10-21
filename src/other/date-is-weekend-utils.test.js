import { isWeekend } from './date-is-weekend-utils.js';

describe('isWeekend', () => {
  test('should return true for a Saturday', () => {
    const date = new Date('2025-10-11T00:00:00'); // Saturday
    expect(isWeekend(date)).toBe(true);
  });

  test('should return true for a Sunday', () => {
    const date = new Date('2025-10-12T00:00:00'); // Sunday
    expect(isWeekend(date)).toBe(true);
  });

  test('should return false for a weekday', () => {
    const date = new Date('2025-10-13T00:00:00'); // Monday
    expect(isWeekend(date)).toBe(false);
  });
});
