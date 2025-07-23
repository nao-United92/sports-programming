import { isSameDay, getDayDifference, isWeekend, addDays, getMonthDifference, formatDate, isValidDate, isToday, isFuture, isPast } from './date-utils.js';

describe('formatDate', () => {
  test('should format a Date object to YYYY-MM-DD string', () => {
    const date = new Date('2023-01-05T10:00:00Z');
    expect(formatDate(date)).toBe('2023-01-05');
  });

  test('should pad month and day with leading zeros', () => {
    const date = new Date('2023-03-07T10:00:00Z');
    expect(formatDate(date)).toBe('2023-03-07');
  });

  test('should return empty string for invalid date', () => {
    expect(formatDate(new Date('invalid'))).toBe('');
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
  });
});

describe('date-utils', () => {
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
  test('should return true for today\'s date', () => {
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
});
