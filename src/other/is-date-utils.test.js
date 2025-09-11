import { isDate } from './is-date-utils';

describe('isDate', () => {
  it('should return true for a Date object', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date('2023-01-01'))).toBe(true);
  });

  it('should return false for non-Date objects', () => {
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate(new Map())).toBe(false);
    expect(isDate(new Set())).toBe(false);
  });

  it('should return false for null and undefined', () => {
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(isDate(123)).toBe(false);
    expect(isDate('string')).toBe(false);
    expect(isDate(true)).toBe(false);
    expect(isDate(Symbol('a'))).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isDate(() => {})).toBe(false);
    expect(isDate(function() {})).toBe(false);
  });

  it('should return false for invalid Date objects', () => {
    expect(isDate(new Date('invalid date'))).toBe(true); // Still a Date object, even if invalid
  });
});
