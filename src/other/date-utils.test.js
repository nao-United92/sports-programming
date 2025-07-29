import { isSameDay, getDayDifference, isWeekend, addDays, getMonthDifference, formatDate, isValidDate, isToday, isFuture, isPast, isLeapYear, getDaysInMonth, isWeekday, isDateInRange } from './date-utils.js';

describe('date-utils', () => {
  describe('formatDate', () => {
    test('should format a Date object to YYYY-MM-DD by default', () => {
      const date = new Date('2023-01-05T10:00:00Z');
      expect(formatDate(date)).toBe('2023-01-05');
    });

    test('should format a Date object with custom format string', () => {
      const date = new Date('2023-01-05T10:05:08Z');
      expect(formatDate(date, 'YYYY/MM/DD HH:mm:ss')).toBe('2023/01/05 19:05:08');
    });

    test('should pad month, day, hours, minutes, and seconds with leading zeros', () => {
      const date = new Date('2023-03-07T03:05:07Z');
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-03-07 12:05:07');
    });

    test('should return empty string for invalid date', () => {
      expect(formatDate(new Date('invalid'))).toBe('');
      expect(formatDate(null)).toBe('');
      expect(formatDate(undefined)).toBe('');
    });
  });

  describe('getMonthDifference', () => {
    test('should calculate the difference in months between two dates', () => {
      const date1 = new Date('2023-01-15');
      const date2 = new Date('2023-04-10');
      expect(getMonthDifference(date1, date2)).toBe(3);
    });

    test('should handle dates in different years', () => {
      const date1 = new Date('2022-11-10');
      const date2 = new Date('2023-02-20');
      expect(getMonthDifference(date1, date2)).toBe(3);
    });

    test('should return 0 for dates in the same month', () => {
      const date1 = new Date('2023-01-05');
      const date2 = new Date('2023-01-25');
      expect(getMonthDifference(date1, date2)).toBe(0);
    });

    test('should return NaN for invalid dates', () => {
      expect(getMonthDifference(new Date('invalid'), new Date())).toBeNaN();
      expect(getMonthDifference(new Date(), new Date('invalid'))).toBeNaN();
    });
  });

  describe('isDateInRange', () => {
    test('should return true if date is within range (inclusive)', () => {
      const date = new Date('2023-01-15');
      const startDate = new Date('2023-01-01');
      const endDate = new Date('2023-01-31');
      expect(isDateInRange(date, startDate, endDate)).toBe(true);
    });

    test('should return true if date is exactly startDate', () => {
      const date = new Date('2023-01-01');
      const startDate = new Date('2023-01-01');
      const endDate = new Date('2023-01-31');
      expect(isDateInRange(date, startDate, endDate)).toBe(true);
    });

    test('should return true if date is exactly endDate', () => {
      const date = new Date('2023-01-31');
      const startDate = new Date('2023-01-01');
      const endDate = new Date('2023-01-31');
      expect(isDateInRange(date, startDate, endDate)).toBe(true);
    });

    test('should return false if date is before startDate', () => {
      const date = new Date('2023-01-01');
      const startDate = new Date('2023-01-02');
      const endDate = new Date('2023-01-31');
      expect(isDateInRange(date, startDate, endDate)).toBe(false);
    });

    test('should return false if date is after endDate', () => {
      const date = new Date('2023-02-01');
      const startDate = new Date('2023-01-01');
      const endDate = new Date('2023-01-31');
      expect(isDateInRange(date, startDate, endDate)).toBe(false);
    });

    test('should return false for invalid date inputs', () => {
      const validDate = new Date('2023-01-15');
      const validStart = new Date('2023-01-01');
      const validEnd = new Date('2023-01-31');

      expect(isDateInRange(new Date('invalid'), validStart, validEnd)).toBe(false);
      expect(isDateInRange(validDate, new Date('invalid'), validEnd)).toBe(false);
      expect(isDateInRange(validDate, validStart, new Date('invalid'))).toBe(false);
      expect(isDateInRange(null, validStart, validEnd)).toBe(false);
      expect(isDateInRange(validDate, null, validEnd)).toBe(false);
      expect(isDateInRange(validDate, validStart, null)).toBe(false);
    });
  });

  describe('isFirstDayOfMonth', () => {
    test('should return true if the date is the first day of the month', () => {
      expect(isFirstDayOfMonth(new Date('2023-01-01'))).toBe(true);
      expect(isFirstDayOfMonth(new Date('2023-02-01'))).toBe(true);
    });

    test('should return false if the date is not the first day of the month', () => {
      expect(isFirstDayOfMonth(new Date('2023-01-02'))).toBe(false);
      expect(isFirstDayOfMonth(new Date('2023-02-15'))).toBe(false);
    });

    test('should return false for invalid dates', () => {
      expect(isFirstDayOfMonth(new Date('invalid'))).toBe(false);
      expect(isFirstDayOfMonth(null)).toBe(false);
      expect(isFirstDayOfMonth(undefined)).toBe(false);
    });
  });
});
  });

  describe('isSameDay', () => {
    test('should return true for dates on the same day', () => {
      const date1 = new Date(2023, 0, 15, 10, 0, 0);
      const date2 = new Date(2023, 0, 15, 15, 30, 0);
      expect(isSameDay(date1, date2)).toBe(true);
    });

    test('should return false for dates on different days', () => {
      const date1 = new Date(2023, 0, 15);
      const date2 = new Date(2023, 0, 16);
      expect(isSameDay(date1, date2)).toBe(false);
    });

    test('should return false for dates in different months', () => {
      const date1 = new Date(2023, 0, 15);
      const date2 = new Date(2023, 1, 15);
      expect(isSameDay(date1, date2)).toBe(false);
    });

    test('should return false for dates in different years', () => {
      const date1 = new Date(2023, 0, 15);
      const date2 = new Date(2024, 0, 15);
      expect(isSameDay(date1, date2)).toBe(false);
    });

    test('should return false for invalid dates', () => {
      expect(isSameDay(new Date('invalid'), new Date())).toBe(false);
      expect(isSameDay(new Date(), new Date('invalid'))).toBe(false);
      expect(isSameDay(null, new Date())).toBe(false);
      expect(isSameDay(new Date(), undefined)).toBe(false);
    });
  });

  describe('getDayDifference', () => {
    test('should calculate the difference in days between two dates', () => {
      const date1 = new Date('2023-01-01T10:00:00Z');
      const date2 = new Date('2023-01-03T15:00:00Z');
      expect(getDayDifference(date1, date2)).toBe(2);
    });

    test('should return 0 for the same day', () => {
      const date1 = new Date('2023-01-01T10:00:00Z');
      const date2 = new Date('2023-01-01T15:00:00Z');
      expect(getDayDifference(date1, date2)).toBe(0);
    });

    test('should return NaN for invalid dates', () => {
      expect(getDayDifference(new Date('invalid'), new Date())).toBeNaN();
      expect(getDayDifference(new Date(), new Date('invalid'))).toBeNaN();
      expect(getDayDifference(null, new Date())).toBeNaN();
      expect(getDayDifference(new Date(), undefined)).toBeNaN();
    });
  });

  describe('isWeekend', () => {
    test('should return true for Saturday', () => {
      const saturday = new Date('2023-07-22T12:00:00Z'); // Saturday
      expect(isWeekend(saturday)).toBe(true);
    });

    test('should return true for Sunday', () => {
      const sunday = new Date('2023-07-23T12:00:00Z'); // Sunday
      expect(isWeekend(sunday)).toBe(true);
    });

    test('should return false for a weekday', () => {
      const monday = new Date('2023-07-24T12:00:00Z'); // Monday
      expect(isWeekend(monday)).toBe(false);
    });

    test('should return false for invalid dates', () => {
      expect(isWeekend(new Date('invalid'))).toBe(false);
      expect(isWeekend(null)).toBe(false);
      expect(isWeekend(undefined)).toBe(false);
    });
  });

  describe('isWeekday', () => {
    test('should return true for a weekday (Monday)', () => {
      const monday = new Date('2023-07-24T12:00:00Z'); // Monday
      expect(isWeekday(monday)).toBe(true);
    });

    test('should return true for a weekday (Friday)', () => {
      const friday = new Date('2023-07-28T12:00:00Z'); // Friday
      expect(isWeekday(friday)).toBe(true);
    });

    test('should return false for a weekend (Saturday)', () => {
      const saturday = new Date('2023-07-22T12:00:00Z'); // Saturday
      expect(isWeekday(saturday)).toBe(false);
    });

    test('should return false for a weekend (Sunday)', () => {
      const sunday = new Date('2023-07-23T12:00:00Z'); // Sunday
      expect(isWeekday(sunday)).toBe(false);
    });

    test('should return false for invalid dates', () => {
      expect(isWeekday(new Date('invalid'))).toBe(false);
      expect(isWeekday(null)).toBe(false);
      expect(isWeekday(undefined)).toBe(false);
    });
  });

  describe('addDays', () => {
    test('should add days to a date', () => {
      const date = new Date('2023-01-01');
      const newDate = addDays(date, 5);
      expect(newDate.getDate()).toBe(6);
    });

    test('should return null for invalid date', () => {
      expect(addDays(new Date('invalid'), 5)).toBeNull();
    });
  });

  describe('isValidDate', () => {
    test('should return true for a valid Date object', () => {
      expect(isValidDate(new Date())).toBe(true);
      expect(isValidDate(new Date('2023-01-01'))).toBe(true);
    });

    test('should return false for an invalid Date object', () => {
      expect(isValidDate(new Date('invalid'))).toBe(false);
    });

    test('should return false for non-Date objects', () => {
      expect(isValidDate(null)).toBe(false);
      expect(isValidDate(undefined)).toBe(false);
      expect(isValidDate('2023-01-01')).toBe(false);
      expect(isValidDate(123)).toBe(false);
    });
  });

  describe('isToday', () => {
    test('should return true for today's date', () => {
      expect(isToday(new Date())).toBe(true);
    });

    test('should return false for a date in the past', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      expect(isToday(yesterday)).toBe(false);
    });
  });

  describe('isFuture', () => {
    test('should return true for a future date', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      expect(isFuture(tomorrow)).toBe(true);
    });

    test('should return false for a past date', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      expect(isFuture(yesterday)).toBe(false);
    });
  });

  describe('isPast', () => {
    test('should return true for a past date', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      expect(isPast(yesterday)).toBe(true);
    });

    test('should return false for a future date', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      expect(isPast(tomorrow)).toBe(false);
    });
  });

  describe('isLeapYear', () => {
    test('should return true for a leap year', () => {
      expect(isLeapYear(2000)).toBe(true);
      expect(isLeapYear(2004)).toBe(true);
    });

    test('should return false for a common year', () => {
      expect(isLeapYear(1900)).toBe(false);
      expect(isLeapYear(2003)).toBe(false);
    });
  });

  describe('getDaysInMonth', () => {
    test('should return the correct number of days for a given month', () => {
      expect(getDaysInMonth(2023, 1)).toBe(31); // January
      expect(getDaysInMonth(2023, 2)).toBe(28); // February (common year)
      expect(getDaysInMonth(2024, 2)).toBe(29); // February (leap year)
      expect(getDaysInMonth(2023, 4)).toBe(30); // April
      expect(getDaysInMonth(2023, 12)).toBe(31); // December
    });

    test('should return 0 for an invalid month', () => {
      expect(getDaysInMonth(2023, 0)).toBe(0);
      expect(getDaysInMonth(2023, 13)).toBe(0);
    });
  });

  describe('startOfWeek', () => {
    test('should return the start of the week (Sunday as start day)', () => {
      const date = new Date('2023-10-25T10:00:00Z'); // Wednesday
      const start = startOfWeek(date);
      expect(start.toISOString()).toBe('2023-10-22T00:00:00.000Z'); // Sunday
    });

    test('should return the start of the week (Monday as start day)', () => {
      const date = new Date('2023-10-25T10:00:00Z'); // Wednesday
      const start = startOfWeek(date, 1); // Monday
      expect(start.toISOString()).toBe('2023-10-23T00:00:00.000Z'); // Monday
    });

    test('should handle dates at the beginning of the week', () => {
      const date = new Date('2023-10-22T10:00:00Z'); // Sunday
      const start = startOfWeek(date);
      expect(start.toISOString()).toBe('2023-10-22T00:00:00.000Z'); // Sunday
    });
  });

  describe('endOfWeek', () => {
    test('should return the end of the week (Sunday as start day)', () => {
      const date = new Date('2023-10-25T10:00:00Z'); // Wednesday
      const end = endOfWeek(date);
      expect(end.toISOString()).toBe('2023-10-28T23:59:59.999Z'); // Saturday
    });

    test('should return the end of the week (Monday as start day)', () => {
      const date = new Date('2023-10-25T10:00:00Z'); // Wednesday
      const end = endOfWeek(date, 1); // Monday
      expect(end.toISOString()).toBe('2023-10-29T23:59:59.999Z'); // Sunday
    });

    test('should handle dates at the end of the week', () => {
      const date = new Date('2023-10-28T10:00:00Z'); // Saturday
      const end = endOfWeek(date);
      expect(end.toISOString()).toBe('2023-10-28T23:59:59.999Z'); // Saturday
    });
  });

  describe('getQuarter', () => {
    test('should return the correct quarter for a given date', () => {
      expect(getQuarter(new Date('2023-01-15'))).toBe(1); // January
      expect(getQuarter(new Date('2023-03-31'))).toBe(1); // March
      expect(getQuarter(new Date('2023-04-01'))).toBe(2); // April
      expect(getQuarter(new Date('2023-06-30'))).toBe(2); // June
      expect(getQuarter(new Date('2023-07-01'))).toBe(3); // July
      expect(getQuarter(new Date('2023-09-30'))).toBe(3); // September
      expect(getQuarter(new Date('2023-10-01'))).toBe(4); // October
      expect(getQuarter(new Date('2023-12-31'))).toBe(4); // December
    });

    test('should return NaN for invalid dates', () => {
      expect(getQuarter(new Date('invalid'))).toBeNaN();
      expect(getQuarter(null)).toBeNaN();
      expect(getQuarter(undefined)).toBeNaN();
    });
  });
});