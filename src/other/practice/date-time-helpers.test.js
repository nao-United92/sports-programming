const { isLeapYear, getDaysInMonth } = require('./date-time-helpers');

describe('date-time-helpers', () => {
  describe('isLeapYear', () => {
    test('should return true for leap years', () => {
      expect(isLeapYear(2000)).toBe(true); // Divisible by 400
      expect(isLeapYear(2020)).toBe(true); // Divisible by 4 but not 100
      expect(isLeapYear(2024)).toBe(true);
    });

    test('should return false for common years', () => {
      expect(isLeapYear(1900)).toBe(false); // Divisible by 100 but not 400
      expect(isLeapYear(2021)).toBe(false);
      expect(isLeapYear(2100)).toBe(false);
    });

    test('should throw a TypeError for non-integer inputs', () => {
      expect(() => isLeapYear(2020.5)).toThrow(TypeError);
      expect(() => isLeapYear('2020')).toThrow(TypeError);
      expect(() => isLeapYear(null)).toThrow(TypeError);
      expect(() => isLeapYear(undefined)).toThrow(TypeError);
    });
  });

  describe('getDaysInMonth', () => {
    test('should return the correct number of days for each month', () => {
      expect(getDaysInMonth(new Date('2023-01-01'))).toBe(31); // Jan
      expect(getDaysInMonth(new Date('2023-03-01'))).toBe(31); // Mar
      expect(getDaysInMonth(new Date('2023-04-01'))).toBe(30); // Apr
      expect(getDaysInMonth(new Date('2023-12-01'))).toBe(31); // Dec
    });

    test('should handle February in a common year', () => {
      expect(getDaysInMonth(new Date('2023-02-01'))).toBe(28);
    });

    test('should handle February in a leap year', () => {
      expect(getDaysInMonth(new Date('2024-02-01'))).toBe(29);
    });

    test('should work for dates at the end of the month', () => {
      expect(getDaysInMonth(new Date('2023-01-31'))).toBe(31);
    });

    test('should throw a TypeError for invalid inputs', () => {
      expect(() => getDaysInMonth('2023-01-01')).toThrow(TypeError);
      expect(() => getDaysInMonth(null)).toThrow(TypeError);
      expect(() => getDaysInMonth(new Date('invalid-date'))).toThrow(TypeError);
    });
  });
});
