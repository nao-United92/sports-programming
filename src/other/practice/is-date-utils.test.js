import { isDate } from './is-date-utils.js';

describe('isDate', () => {
  it('should return true for Date objects', () => {
    expect(isDate(new Date())).toBe(true);
  });

  it('should return false for non-Date values', () => {
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(123)).toBe(false);
    expect(isDate('string')).toBe(false);
    expect(isDate(true)).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate(() => {})).toBe(false);
    expect(isDate('2023-01-01')).toBe(false); // String date is not a Date object
  });
});
