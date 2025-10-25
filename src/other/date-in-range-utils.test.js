const { isDateInRange } = require('./date-in-range-utils');

describe('isDateInRange', () => {
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-01-31');

  test('should return true for a date within the range', () => {
    const date = new Date('2023-01-15');
    expect(isDateInRange(date, startDate, endDate)).toBe(true);
  });

  test('should return true for the start date of the range', () => {
    expect(isDateInRange(startDate, startDate, endDate)).toBe(true);
  });

  test('should return true for the end date of the range', () => {
    expect(isDateInRange(endDate, startDate, endDate)).toBe(true);
  });

  test('should return false for a date before the range', () => {
    const date = new Date('2022-12-31');
    expect(isDateInRange(date, startDate, endDate)).toBe(false);
  });

  test('should return false for a date after the range', () => {
    const date = new Date('2023-02-01');
    expect(isDateInRange(date, startDate, endDate)).toBe(false);
  });

  test('should throw an error if any argument is not a Date object', () => {
    expect(() => isDateInRange(new Date(), startDate, '2023-01-31')).toThrow('All arguments must be Date objects.');
    expect(() => isDateInRange(new Date(), '2023-01-01', endDate)).toThrow('All arguments must be Date objects.');
    expect(() => isDateInRange('2023-01-15', startDate, endDate)).toThrow('All arguments must be Date objects.');
  });
});
