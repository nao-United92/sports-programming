import daysBetween from './date-days-between-utils';

describe('daysBetween', () => {
  test('should return 0 days for the same date', () => {
    const date = new Date('2023-01-01');
    expect(daysBetween(date, date)).toBe(0);
  });

  test('should return the correct number of days for different dates', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-05');
    expect(daysBetween(date1, date2)).toBe(4);
    expect(daysBetween(date2, date1)).toBe(4); // Order should not matter
  });

  test('should handle dates across months', () => {
    const date1 = new Date('2023-01-28');
    const date2 = new Date('2023-02-03');
    expect(daysBetween(date1, date2)).toBe(6);
  });

  test('should handle dates across years', () => {
    const date1 = new Date('2022-12-30');
    const date2 = new Date('2023-01-02');
    expect(daysBetween(date1, date2)).toBe(3);
  });

  test('should handle dates with time components (ignoring time for day count)', () => {
    const date1 = new Date('2023-01-01T10:00:00Z');
    const date2 = new Date('2023-01-01T23:59:59Z');
    expect(daysBetween(date1, date2)).toBe(0); // Less than a full day difference

    const date3 = new Date('2023-01-01T10:00:00Z');
    const date4 = new Date('2023-01-02T09:00:00Z');
    expect(daysBetween(date3, date4)).toBe(0); // Less than a full day difference, round to 0 days
  });

  test('should return 1 day for dates exactly 24 hours apart', () => {
    const date1 = new Date('2023-01-01T00:00:00Z');
    const date2 = new Date('2023-01-02T00:00:00Z');
    expect(daysBetween(date1, date2)).toBe(1);
  });

  test('should throw an error if arguments are not valid Date objects', () => {
    expect(() => daysBetween(null, new Date())).toThrow(TypeError);
    expect(() => daysBetween(new Date(), '2023-01-01')).toThrow(TypeError);
    expect(() => daysBetween(new Date('invalid date'), new Date())).toThrow(TypeError);
    expect(() => daysBetween(new Date(), new Date('invalid date'))).toThrow(TypeError);
  });
});
