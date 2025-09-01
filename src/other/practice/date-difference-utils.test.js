import { differenceInDays } from './date-difference-utils';

describe('differenceInDays', () => {
  test('should return 0 for the same date', () => {
    const date1 = new Date('2024-01-01');
    const date2 = new Date('2024-01-01');
    expect(differenceInDays(date1, date2)).toBe(0);
  });

  test('should return 1 for one day difference', () => {
    const date1 = new Date('2024-01-01');
    const date2 = new Date('2024-01-02');
    expect(differenceInDays(date1, date2)).toBe(1);
  });

  test('should return the correct difference for multiple days', () => {
    const date1 = new Date('2024-01-01');
    const date2 = new Date('2024-01-11');
    expect(differenceInDays(date1, date2)).toBe(10);
  });

  test('should handle dates in reverse order', () => {
    const date1 = new Date('2024-01-11');
    const date2 = new Date('2024-01-01');
    expect(differenceInDays(date1, date2)).toBe(10);
  });
});
