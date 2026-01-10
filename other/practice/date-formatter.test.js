const { format } = require('./date-formatter.js');

describe('format', () => {
  test('should format a date with the default pattern', () => {
    const date = new Date(2023, 0, 15, 10, 30, 45); // Jan 15, 2023 10:30:45
    expect(format(date)).toBe('2023-01-15 10:30:45');
  });

  test('should format a date with a custom pattern', () => {
    const date = new Date(2024, 11, 5, 2, 5, 7); // Dec 5, 2024 02:05:07
    expect(format(date, 'DD/MM/YYYY HH:mm')).toBe('05/12/2024 02:05');
  });

  test('should handle single digit month, day, hour, minute, second with leading zeros', () => {
    const date = new Date(2023, 1, 5, 1, 2, 3); // Feb 5, 2023 01:02:03
    expect(format(date)).toBe('2023-02-05 01:02:03');
  });

  test('should format date for max values', () => {
    const date = new Date(2099, 11, 31, 23, 59, 59); // Dec 31, 2099 23:59:59
    expect(format(date)).toBe('2099-12-31 23:59:59');
  });

  test('should throw an error if the first argument is not a valid Date object', () => {
    expect(() => format(null)).toThrow('Expected a valid Date object for the first argument.');
    expect(() => format(undefined)).toThrow('Expected a valid Date object for the first argument.');
    expect(() => format('2023-01-01')).toThrow('Expected a valid Date object for the first argument.');
    expect(() => format(12345)).toThrow('Expected a valid Date object for the first argument.');
    expect(() => format(new Date('invalid date string'))).toThrow('Expected a valid Date object for the first argument.');
  });

  test('should throw an error if the second argument is not a string', () => {
    const date = new Date();
    expect(() => format(date, null)).toThrow('Expected a string for the second argument (format pattern).');
    expect(() => format(date, 123)).toThrow('Expected a string for the second argument (format pattern).');
  });
});
