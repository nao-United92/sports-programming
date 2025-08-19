const { isSameDay, isPastDate, isFutureDate, isBetweenDates, isWeekend } = require('./date-comparison-utils.js');

describe('Date Comparison Utilities', () => {
  describe('isSameDay', () => {
    test('should return true for two dates on the same day', () => {
      const date1 = new Date('2023-01-15T10:00:00');
      const date2 = new Date('2023-01-15T15:30:00');
      expect(isSameDay(date1, date2)).toBe(true);
    });

    test('should return false for two dates on different days', () => {
      const date1 = new Date('2023-01-15');
      const date2 = new Date('2023-01-16');
      expect(isSameDay(date1, date2)).toBe(false);
    });

    test('should return false for invalid date inputs', () => {
      expect(isSameDay(new Date('invalid'), new Date())).toBe(false);
      expect(isSameDay(new Date(), null)).toBe(false);
    });
  });

  describe('isPastDate', () => {
    test('should return true for a date in the past', () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);
      expect(isPastDate(pastDate)).toBe(true);
    });

    test('should return false for a date in the future', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      expect(isPastDate(futureDate)).toBe(false);
    });

    test('should return false for invalid date input', () => {
      expect(isPastDate(new Date('invalid'))).toBe(false);
      expect(isPastDate(null)).toBe(false);
    });
  });

  describe('isFutureDate', () => {
    test('should return true for a date in the future', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      expect(isFutureDate(futureDate)).toBe(true);
    });

    test('should return false for a date in the past', () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);
      expect(isFutureDate(pastDate)).toBe(false);
    });

    test('should return false for invalid date input', () => {
      expect(isFutureDate(new Date('invalid'))).toBe(false);
      expect(isFutureDate(null)).toBe(false);
    });
  });

  describe('isBetweenDates', () => {
    const startDate = new Date('2023-01-10');
    const endDate = new Date('2023-01-20');

    test('should return true if date is within the range', () => {
      const midDate = new Date('2023-01-15');
      expect(isBetweenDates(midDate, startDate, endDate)).toBe(true);
    });

    test('should return true if date is exactly the start date', () => {
      expect(isBetweenDates(startDate, startDate, endDate)).toBe(true);
    });

    test('should return true if date is exactly the end date', () => {
      expect(isBetweenDates(endDate, startDate, endDate)).toBe(true);
    });

    test('should return false if date is before the start date', () => {
      const beforeDate = new Date('2023-01-09');
      expect(isBetweenDates(beforeDate, startDate, endDate)).toBe(false);
    });

    test('should return false if date is after the end date', () => {
      const afterDate = new Date('2023-01-21');
      expect(isBetweenDates(afterDate, startDate, endDate)).toBe(false);
    });

    test('should return false for invalid date inputs', () => {
      expect(isBetweenDates(new Date('invalid'), startDate, endDate)).toBe(false);
      expect(isBetweenDates(startDate, null, endDate)).toBe(false);
      expect(isBetweenDates(startDate, startDate, new Date('invalid'))).toBe(false);
    });
  });

  describe('isWeekend', () => {
    test('should return true for a Saturday', () => {
      const saturday = new Date('2023-08-19T12:00:00'); // August 19, 2023 is a Saturday
      expect(isWeekend(saturday)).toBe(true);
    });

    test('should return true for a Sunday', () => {
      const sunday = new Date('2023-08-20T12:00:00'); // August 20, 2023 is a Sunday
      expect(isWeekend(sunday)).toBe(true);
    });

    test('should return false for a weekday (Monday)', () => {
      const monday = new Date('2023-08-21T12:00:00'); // August 21, 2023 is a Monday
      expect(isWeekend(monday)).toBe(false);
    });

    test('should return false for a weekday (Friday)', () => {
      const friday = new Date('2023-08-18T12:00:00'); // August 18, 2023 is a Friday
      expect(isWeekend(friday)).toBe(false);
    });

    test('should return false for invalid date input', () => {
      expect(isWeekend(new Date('invalid'))).toBe(false);
      expect(isWeekend(null)).toBe(false);
      expect(isWeekend(undefined)).toBe(false);
    });
  });
});