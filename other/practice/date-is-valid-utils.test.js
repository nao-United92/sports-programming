import isValidDate from './date-is-valid-utils';

describe('isValidDate', () => {
  test('should return true for a valid Date object', () => {
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate(new Date('2023-01-01'))).toBe(true);
    expect(isValidDate(new Date(2023, 0, 1))).toBe(true);
  });

  test('should return false for an invalid Date object', () => {
    expect(isValidDate(new Date('invalid date'))).toBe(false);
  });

  test('should return false for non-Date objects', () => {
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate(undefined)).toBe(false);
    expect(isValidDate('2023-01-01')).toBe(false);
    expect(isValidDate(12345)).toBe(false);
    expect(isValidDate({})).toBe(false);
    expect(isValidDate([])).toBe(false);
  });
});