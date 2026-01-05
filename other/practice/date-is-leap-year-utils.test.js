import isLeapYear from './date-is-leap-year-utils';

describe('isLeapYear', () => {
  test('should return true for common leap years', () => {
    expect(isLeapYear(2000)).toBe(true); // Divisible by 400
    expect(isLeapYear(2004)).toBe(true);
    expect(isLeapYear(2020)).toBe(true);
  });

  test('should return false for common non-leap years', () => {
    expect(isLeapYear(2001)).toBe(false);
    expect(isLeapYear(2003)).toBe(false);
    expect(isLeapYear(2021)).toBe(false);
  });

  test('should return false for end-of-century years not divisible by 400', () => {
    expect(isLeapYear(1900)).toBe(false); // Divisible by 100 but not by 400
    expect(isLeapYear(2100)).toBe(false);
  });

  test('should throw an error if the argument is not an integer', () => {
    expect(() => isLeapYear(2000.5)).toThrow(TypeError);
    expect(() => isLeapYear('2000')).toThrow(TypeError);
    expect(() => isLeapYear(null)).toThrow(TypeError);
    expect(() => isLeapYear(undefined)).toThrow(TypeError);
  });
});
